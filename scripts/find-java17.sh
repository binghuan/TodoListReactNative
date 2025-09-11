#!/bin/bash

# Script to find and use Java 17 for React Native iOS builds
# This script searches for Java 17 installations and sets JAVA_HOME accordingly

echo "🔍 Searching for Java 17 installations..."

# Function to check if a Java version is 17.x
is_java17() {
    local java_path="$1"
    if [ -x "$java_path/bin/java" ]; then
        local version=$("$java_path/bin/java" -version 2>&1 | grep "openjdk version\|java version" | head -1)
        if echo "$version" | grep -q "\"17\."; then
            return 0
        fi
    fi
    return 1
}

# Array to store potential Java 17 paths
java17_paths=()

# Check system Java installations
if command -v /usr/libexec/java_home >/dev/null 2>&1; then
    echo "📋 Checking system Java installations..."
    
    # Get all Java installations and filter for version 17
    while IFS= read -r line; do
        if echo "$line" | grep -q "17\."; then
            java_path=$(echo "$line" | awk '{print $NF}')
            if is_java17 "$java_path"; then
                java17_paths+=("$java_path")
                echo "✅ Found Java 17: $java_path"
            fi
        fi
    done < <(/usr/libexec/java_home -V 2>&1 | grep "17\.")
fi

# Check common installation directories
common_paths=(
    "/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home"
    "/Library/Java/JavaVirtualMachines/adoptopenjdk-17.jdk/Contents/Home"
    "/Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home"
    "/Users/$USER/Library/Java/JavaVirtualMachines/jbr-17*/Contents/Home"
    "/opt/homebrew/opt/openjdk@17"
    "/usr/local/opt/openjdk@17"
)

echo "🔍 Checking common Java 17 installation paths..."
for path in "${common_paths[@]}"; do
    # Handle wildcard paths
    for expanded_path in $path; do
        if [ -d "$expanded_path" ] && is_java17 "$expanded_path"; then
            # Check if already in array
            if [[ ! " ${java17_paths[@]} " =~ " ${expanded_path} " ]]; then
                java17_paths+=("$expanded_path")
                echo "✅ Found Java 17: $expanded_path"
            fi
        fi
    done
done

# Select the best Java 17 installation
if [ ${#java17_paths[@]} -eq 0 ]; then
    echo "❌ No Java 17 installation found!"
    echo "🔧 Please install Java 17:"
    echo "   - Using Homebrew: brew install openjdk@17"
    echo "   - Using SDKMAN: sdk install java 17.0.5-tem"
    echo "   - Download from: https://adoptium.net/"
    exit 1
fi

# Use the first found Java 17 (or prioritize certain distributions)
selected_java=""
for path in "${java17_paths[@]}"; do
    if echo "$path" | grep -q "temurin"; then
        selected_java="$path"
        break
    elif echo "$path" | grep -q "adoptopenjdk"; then
        selected_java="$path"
        break
    fi
done

# If no preferred distribution found, use the first one
if [ -z "$selected_java" ]; then
    selected_java="${java17_paths[0]}"
fi

echo "🎯 Selected Java 17: $selected_java"

# Verify the selected Java
java_version=$("$selected_java/bin/java" -version 2>&1 | head -1)
echo "📋 Java version: $java_version"

# Export JAVA_HOME and run the command
export JAVA_HOME="$selected_java"
echo "🚀 Setting JAVA_HOME=$JAVA_HOME"
echo "🏃 Running: $@"

# Execute the passed command with the correct JAVA_HOME
exec "$@"
