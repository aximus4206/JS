


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while(currentNode){
            if(newNode.value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return;
                }

                currentNode = currentNode.left;
            }else{
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return;
                }

                currentNode = currentNode.right;
            }
        }
    }

    preorder(node, callbackF){

    }

    traverseDFS(callbackF, method){
        if(method = 'preorder'){
            return this.preorder(this.root, callbackF);
        }

        if(method = 'inorder'){
            return this.inorder(this.root, callbackF);
        }
    }

    traverseBFS(){

    }
}

const myFirstTree = new BinaryTree();

myFirstTree.insert(8);
myFirstTree.insert(7);
myFirstTree.insert(9);
myFirstTree.insert(20);
myFirstTree.insert(5);
myFirstTree.insert(11);
myFirstTree.insert(2);
myFirstTree.insert(4);
myFirstTree.insert(17);
myFirstTree.insert(13);

console.log(myFirstTree);