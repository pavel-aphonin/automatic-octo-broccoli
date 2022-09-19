const createTree = (data) => {

  const addChildren = (arr, children) => {

    children.forEach(item => {

      const children = arr.filter(i => i.parent_id === item.id)
      item['children'] = children;

      if (!!children.length) {
        addChildren(arr, children)
      }
    })
  }

  const tree = data.filter(i => i.parent_id === null);

  tree.forEach(item => {

    const children = data.filter(i => i.parent_id === item.id)
    item['children'] = children;

    addChildren(data, children)
  })

  return tree
}

export default createTree;
