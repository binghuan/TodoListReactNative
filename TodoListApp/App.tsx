/**
 * TodoList React Native App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
  Alert,
} from 'react-native';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
    flex: 1,
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  const dynamicStyles = {
    header: {
      backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
    },
    headerTitle: {
      color: isDarkMode ? '#ffffff' : '#000000',
    },
    headerSubtitle: {
      color: isDarkMode ? '#cccccc' : '#666666',
    },
    input: {
      backgroundColor: isDarkMode ? '#2d2d2d' : '#f8f8f8',
      color: isDarkMode ? '#ffffff' : '#000000',
      borderColor: isDarkMode ? '#404040' : '#e0e0e0',
    },
    emptyText: {
      color: isDarkMode ? '#888888' : '#999999',
    },
    emptySubText: {
      color: isDarkMode ? '#666666' : '#bbbbbb',
    },
    todoItem: {
      backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
    },
    checkbox: {
      borderColor: isDarkMode ? '#404040' : '#ddd',
    },
    completedCheckbox: {
      backgroundColor: '#4CAF50',
      borderColor: '#4CAF50',
    },
    todoText: {
      color: isDarkMode ? '#ffffff' : '#000000',
    },
    completedTodoText: {
      textDecorationLine: 'line-through' as const,
      color: isDarkMode ? '#888888' : '#999999',
    },
    todoDate: {
      color: isDarkMode ? '#666666' : '#bbbbbb',
    },
    footer: {
      backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
    },
    addButton: {
      opacity: inputText.trim() ? 1 : 0.5,
    },
    clearButton: {
      opacity: completedCount > 0 ? 1 : 0.5,
    },
  };

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputText.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([newTodo, ...todos]);
      setInputText('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    Alert.alert(
      '刪除待辦事項',
      '您確定要刪除這個待辦事項嗎？',
      [
        { text: '取消', style: 'cancel' },
        { 
          text: '刪除', 
          style: 'destructive',
          onPress: () => setTodos(todos.filter(todo => todo.id !== id))
        }
      ]
    );
  };

  const clearCompleted = () => {
    if (completedCount === 0) {
      Alert.alert('提示', '沒有已完成的待辦事項');
      return;
    }
    
    Alert.alert(
      '清除已完成',
      `將刪除 ${completedCount} 個已完成的待辦事項`,
      [
        { text: '取消', style: 'cancel' },
        { 
          text: '清除', 
          style: 'destructive',
          onPress: () => setTodos(todos.filter(todo => !todo.completed))
        }
      ]
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
      {/* Header */}
      <View style={[styles.header, dynamicStyles.header]}>
        <Text style={[styles.headerTitle, dynamicStyles.headerTitle]}>
          📝 我的待辦清單
        </Text>
        <Text style={[styles.headerSubtitle, dynamicStyles.headerSubtitle]}>
          {totalCount > 0 ? `共 ${totalCount} 項，已完成 ${completedCount} 項` : '開始新增您的待辦事項'}
        </Text>
      </View>

      {/* Input Section */}
      <View style={[styles.inputSection, dynamicStyles.header]}>
        <TextInput
          style={[styles.input, dynamicStyles.input]}
          value={inputText}
          onChangeText={setInputText}
          placeholder="新增待辦事項..."
          placeholderTextColor={isDarkMode ? '#888888' : '#999999'}
          onSubmitEditing={addTodo}
          returnKeyType="done"
        />
        <TouchableOpacity 
          style={[styles.addButton, dynamicStyles.addButton]}
          onPress={addTodo}
          disabled={!inputText.trim()}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <ScrollView style={styles.todoList}>
        {todos.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, dynamicStyles.emptyText]}>
              🎯 還沒有待辦事項
            </Text>
            <Text style={[styles.emptySubText, dynamicStyles.emptySubText]}>
              點擊上方輸入框新增您的第一個待辦事項
            </Text>
          </View>
        ) : (
          todos.map((todo) => (
            <View
              key={todo.id}
              style={[
                styles.todoItem,
                dynamicStyles.todoItem,
                todo.completed && styles.completedTodo
              ]}
            >
              <TouchableOpacity
                style={styles.todoContent}
                onPress={() => toggleTodo(todo.id)}
              >
                <View style={styles.todoLeft}>
                  <View style={[
                    styles.checkbox,
                    dynamicStyles.checkbox,
                    todo.completed && dynamicStyles.completedCheckbox
                  ]}>
                    {todo.completed && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <View style={styles.todoTextContainer}>
                    <Text
                      style={[
                        styles.todoText,
                        dynamicStyles.todoText,
                        todo.completed && dynamicStyles.completedTodoText
                      ]}
                    >
                      {todo.text}
                    </Text>
                    <Text style={[styles.todoDate, dynamicStyles.todoDate]}>
                      {todo.createdAt.toLocaleDateString('zh-TW')} {todo.createdAt.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTodo(todo.id)}
              >
                <Text style={styles.deleteButtonText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      {/* Footer */}
      {todos.length > 0 && (
        <View style={[styles.footer, dynamicStyles.footer]}>
          <TouchableOpacity
            style={[styles.clearButton, dynamicStyles.clearButton]}
            onPress={clearCompleted}
            disabled={completedCount === 0}
          >
            <Text style={styles.clearButtonText}>清除已完成</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
  },
  inputSection: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 12,
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  todoList: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 20,
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    textAlign: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  completedTodo: {
    opacity: 0.7,
  },
  todoContent: {
    flex: 1,
  },
  todoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoTextContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
    marginBottom: 4,
  },
  todoDate: {
    fontSize: 12,
  },
  deleteButton: {
    padding: 8,
  },
  deleteButtonText: {
    fontSize: 18,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
