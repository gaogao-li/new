function traverse(tree) {
  if (tree.left) {
    traverse(tree.left)
  }
  console.log(tree.value)
  arr.push(tree.value)
  if (tree.right) {
    traverse(tree.right)
  }
}
var arr = []
var tree = {
  value: 2,
  left: {
    value: 0,
    right: {
      value: 1,
    }
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: {
        value: 4,
        left: {
          value: 3,
        }
      }
    },
    right: {
      value: 7,
      right: {
        value: 9,
        left: {
          value: 8,
        }
      }
    }
  },
}

// 按层输出
function div(tree) {
  var toBeLog = []

  toBeLog.push(tree)

  debugger

  while (toBeLog.length > 0) {
    var l = toBeLog.length
    for (var i = 0; i < l; i++) {
      console.log(toBeLog[i].value)
      if (toBeLog[i].left) {
        toBeLog.push(toBeLog[i].left)
      }
      if (toBeLog[i].right) {
        toBeLog.push(toBeLog[i].right)
      }
    }
    toBeLog.splice(0, l)
  }
}

// traverse(tree)
div(tree)
