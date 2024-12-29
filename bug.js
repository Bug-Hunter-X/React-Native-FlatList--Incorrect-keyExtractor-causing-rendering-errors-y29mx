In React Native, when working with FlatList, using the `keyExtractor` prop incorrectly can lead to unexpected behavior, such as incorrect rendering, item duplication, or performance issues.  The `keyExtractor` function must return a unique, stable key for each item in the data array. If keys are not unique, FlatList might not be able to correctly identify which items have changed, leading to rendering problems.  For example, using the index as the key (`keyExtractor={(item, index) => index}`) is incorrect unless your data array never changes its order or items are never added or removed, as the keys will change when items are inserted or deleted.

```javascript
// Incorrect usage:
<FlatList
  data={myData}
  keyExtractor={(item, index) => index}
  renderItem={({ item }) => <Text>{item.text}</Text>}
/>

```