# React Native FlatList: Incorrect keyExtractor Causing Rendering Errors

This repository demonstrates a common error in React Native's FlatList component: incorrect usage of the `keyExtractor` prop.  Using an inappropriate key extractor can lead to unexpected rendering behavior, such as incorrect item display, duplication, or performance degradation.  The example shows both the problematic code and its correct implementation.

## Problem

The provided `bug.js` file showcases a FlatList that uses the index as the `keyExtractor`.  This is incorrect unless the data array remains static in terms of order and number of items.  Modifying the data array will cause incorrect rendering behavior due to non-unique keys. 

## Solution

`bugSolution.js` demonstrates the correct way to implement `keyExtractor`.  It uses a unique identifier from each data object (in this case, the 'id' field) to create unique keys for FlatList.  This ensures proper item rendering and optimal performance, even when data is modified.