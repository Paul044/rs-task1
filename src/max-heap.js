const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
	}

	push(data, priority) {
		var newNode =new Node(data, priority);
		this.insertNode(newNode);
		this.shiftNodeUp(newNode);
	}

	pop() {


		if(this.root!=null)
		{
			var detRoot=new Node();
			detRoot=this.detachRoot();
			var datad=detRoot.data;
			this.restoreRootFromLastInsertedNode(detRoot);
			this.shiftNodeDown(this.root);
			return datad;
		}
		
	}

	detachRoot() {
		
		var detachedRoot=new Node();
		detachedRoot=this.root;

		if(this.parentNodes[0]==this.root) 
			{
				this.parentNodes.shift();
			}


		this.root=null;
		return detachedRoot;	
		

		

	}

	restoreRootFromLastInsertedNode(detached) {
		if(this.parentNodes.length>0)
		{
					var lastInsertedNode=this.parentNodes[this.parentNodes.length-1];
					this.parentNodes.pop();
					
				
					if(lastInsertedNode==detached.left||lastInsertedNode==detached.right)
						{
							this.parentNodes.unshift(lastInsertedNode);
						}
						else{
								if(this.parentNodes.length>1&&lastInsertedNode.parent.right==lastInsertedNode)
								{
									this.parentNodes.unshift(lastInsertedNode.parent);
									lastInsertedNode.parent.right=null;
								}
								else
								{
									if(this.parentNodes.length>1&&lastInsertedNode.parent.left==lastInsertedNode)
									{
										lastInsertedNode.parent.left=null;
									}
								}
							}

					if(this.parentNodes.length>1&&lastInsertedNode!=detached.left)
						{
							lastInsertedNode.left=detached.left;
							detached.left.parent=lastInsertedNode;	
						}
					
					if(this.parentNodes.length>1&&lastInsertedNode!=detached.right)
						{
							lastInsertedNode.right=detached.right;
							detached.right.parent=lastInsertedNode;

							
				
						}

					
						lastInsertedNode.parent=null;
					
					
					
					
					this.root=lastInsertedNode;

		}




	}

	size() {
		if(this.root!=null)
			{
				return this.root.numberOfChilds();
			}
		else
			{	
				return 0;	
			}
		
	}

	isEmpty() {
		return (this.root==null);
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
		if(this.root==null) 
			{
				this.root=node;
				this.parentNodes[0]=node;
			}
		else
			{
				
				this.parentNodes[0].appendChild(node);
						
				this.parentNodes[this.parentNodes.length]=node;
				
				
				if(this.parentNodes[0].left!=null&&this.parentNodes[0].right!=null)
					{
						this.parentNodes.shift();
					}
						
			}		
	
	}

	shiftNodeUp(node) {
		if(node.parent!=null)
		{
			if(node.priority>node.parent.priority) 
				{
					
					if(node==this.parentNodes[0])
					{
						this.parentNodes[0]=node.parent;
					}
					else{
							if(node==this.parentNodes[this.parentNodes.length-1]&&node.parent!=this.parentNodes[0])
							{
								this.parentNodes[this.parentNodes.length-1]=node.parent;
							}
								else{	
									if(node==this.parentNodes[this.parentNodes.length-1]&&node.parent==this.parentNodes[0])
										{
											this.parentNodes[this.parentNodes.length-1]=this.parentNodes[0];
											this.parentNodes[0]=node;
										}
							}

						}
				

				

					
					node.swapWithParent();
					this.shiftNodeUp(node);

				}
		}
		else
		{
			this.root=node;
			this.root.parent=null;
		}


	}

	shiftNodeDown(node) {
	if(this.parentNodes.length>0){
	/*	if(node.left!=null)
		{
				if(node.left.priority>node.priority)
					{
						var buf=new Node();
						buf=node.left;
						node.left.swapWithParent();
						this.shiftNodeDown(node);
						this.root=buf;
					}
		}*/
		if(node.right!=null&&node.right.priority>=node.left.priority)
		{
			if(node.right!=null)
			{
					if(node.right.priority>node.priority)
						{	
							var index1=this.parentNodes.indexOf(node.right);
							var index2=this.parentNodes.indexOf(node);
							var bu=new Node();
							if(index2<0&&index1>=0){
								this.parentNodes[index1]=node;	
							}
							if(index2>=0&&index1>=0){
								bu=this.parentNodes[index1];
								this.parentNodes[index1]=this.parentNodes[index2];
								this.parentNodes[index2]=bu;
							}
							/*var bu=new Node();
							bu=this.parentNodes[index1];
							this.parentNodes[index1]=this.parentNodes[index2];
							this.parentNodes[index2]=bu;
								*/

							var buf=new Node();
							buf=node.right;
							node.right.swapWithParent();
							this.shiftNodeDown(node);
							this.root=buf;
						}
			}
		}
		else
		{
			if(node.left!=null)
			{
					if(node.left.priority>node.priority)
						{
							var index1=this.parentNodes.indexOf(node.left);							
							var index2=this.parentNodes.indexOf(node);
							var bu=new Node();
							if(index2<0&&index1>=0){
								this.parentNodes[index1]=node;	
							}
							if(index2>=0&&index1>=0){
								bu=this.parentNodes[index1];
								this.parentNodes[index1]=this.parentNodes[index2];
								this.parentNodes[index2]=bu;
							}
								



							var buf=new Node();
							buf=node.left;
							node.left.swapWithParent();
							this.shiftNodeDown(node);
							this.root=buf;
						}
			}
		}

	}

		
	}
}

module.exports = MaxHeap;
