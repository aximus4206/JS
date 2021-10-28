

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.root = null;
    }

    insertValue(value){
        let newNode = new Node(value);
        if (!this.root){
            this.root = newNode;

        }else{
            this.insertNewNode(this.root, newNode);

        }
    }
    insertNewNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNewNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNewNode(node.right, newNode);
            }
        }
    }

    searchValue(node, value) {
        if(node === null){
            return null;
        }else if(value < node.value){
            return this.searchValue(node.left, value);
        }else if(value > node.value){
            return this.searchValue(node.right, value);
        }else{
            console.log(node);
            return node;
        }
    }

    minNode(node){
        if(node.left === null){
            return node;
        }else{
            return this.findMinNode(node.left);
        }
              
    }

    remove(value){
    this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value){

        if(node === null){
            return null;
        }else if(value < node.value){
            node.left = this.removeNode(node.left, value);
            return node;
        }else if(value > node.value){
            node.right = this.removeNode(node.right, value);
            return node;
        }else if(node.left === null && node.right === null){
            node = null;
            return node;
        }else{
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }

            let newNode = this.minNode(node.right);
            node.value = newNode.value;
            node.right = this.removeNode(node.right, newNode.value);
            return node;

        }
    }

    preorder(node, callbackF){
        if(node !== null){
            callbackF(node.value);
            // console.log(node.value);
            this.preorder(node.left, callbackF);

            this.preorder(node.right, callbackF);
        }
    }

    inorder(node, callbackF){
        if(node !== null){
            this.inorder(node.left, callbackF);

            callbackF(node.value);

            this.inorder(node.right, callbackF);
        }
    }

    postorder(node, callbackF) {
        if(node !== null) {
            this.postorder(node.left, callbackF);

            this.postorder(node.right, callbackF);

            callbackF(node.value);
        }
    }


    traverseDFS(callbackF, method){
        if(method === 'preorder'){
            return this.preorder(this.root, callbackF);
        }

        if(method === 'inorder'){
            return this.inorder(this.root, callbackF);
        }

        return this.postorder(this.root, callbackF);

    }

    traverseBFS(callbackF){
        let queue = [this.root];

        while(queue.length){
            const node = queue.shift();
            callbackF(node);

            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right);
            }
        }
    }
}

const myFirstTree = new Node();

myFirstTree.insertValue(8);
myFirstTree.insertValue(7);
myFirstTree.insertValue(9);
myFirstTree.insertValue(20);
myFirstTree.insertValue(5);
myFirstTree.insertValue(11);
myFirstTree.insertValue(2);
myFirstTree.insertValue(4);
myFirstTree.insertValue(17);
myFirstTree.insertValue(13);

// console.log(myFirstTree);


// myFirstTree.traverseDFS((node) => {
//     console.log(node);
// }, 'preorder');

// myFirstTree.traverseDFS((node) => {
//     console.log(node);
// }, 'inorder');

// myFirstTree.traverseDFS((node) => {
//     console.log(node);
// }, 'postorder');

// myFirstTree.traverseBFS((node) => {
//     console.log(node.value)
// });

// myFirstTree.searchValue(myFirstTree.root, 2);

// myFirstTree.remove(20);
// myFirstTree.remove(7);

let arr = [8, 6, 3, 11, 4, 9, 2, 1, 7, 5];

Array.prototype.bubbleSort = function bubbleSort(callback){
    for(let i = 0; i < this.length-1; i++){
        for(let j = 0; j < this.length-1-i; j++){
            if(callback(this[j+1], this[j])){
                let temp = this[j+1];
                this[j+1] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
arr.bubbleSort((a, b) => a < b);

Array.prototype.chosenSort = function(callback){
    for(let i = 0; i < this.length-1; i++){
        let min = i;
        for(let j = i+1; j < this.length; j++){
            if(callback(this[j], this[min])){
                min = j;
            }
        }
        let temp = this[min];
        this[min] = this[i];
        this[i] = temp;
    }
    return this;
}
arr.chosenSort((a, b) => a < b);
