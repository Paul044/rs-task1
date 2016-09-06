class Node {
	
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.right=null;
		this.left=null;

	}

	appendChild(node) {
		if (this.left!=null&&this.right!=null){}
			else{
		if(this.left!=null){this.right=node;node.parent=this;}
			else{this.left=node;node.parent=this;}
				}
	}

	removeChild(node) {
		if(node==this.left){this.left=null}
			else{ if(node==this.right){this.right=null}
				else{ throw exeption}

			}
		node.parent=null;
	}


	remove() {
		if(this.parent!=null){
			this.parent.removeChild(this);
		}
			
		
	}

	swapWithParent() {
		if (this.parent==null){}
			else{
				

				if(this.left!=null)
				{
					this.left.parent=this.parent;
				}
				if(this.right!=null)
				{
					this.right.parent=this.parent;
				}


				if (this.parent.right==this&&this.parent.left!=null){
					this.parent.left.parent=this;
				}
				if (this.parent.left==this&&this.parent.right!=null){
					this.parent.right.parent=this;
				}

				if(this.parent.parent!=null&&this.parent.parent.left==this.parent)
				{
					this.parent.parent.left=this;
				}
				if(this.parent.parent!=null&&this.parent.parent.right==this.parent)
				{
					this.parent.parent.right=this;
				}

				var b=new Node();
				b.parent=this.parent.parent;

				if(this.parent.left==this){
					b.left=this.parent;
				}else{b.left=this.parent.left;}
				
				if(this.parent.right==this){
					b.right=this.parent;
				}else{b.right=this.parent.right;}

				

				

				this.parent.left=this.left;
				this.parent.right=this.right;
				this.parent.parent=this;

				
				this.left=b.left;
				this.right=b.right;
				this.parent=b.parent;
				
				
				

			}	
	}


	numberOfChilds()
	{

		var i=0;
		var l=0;
		var r=0;
		if(this.left!=null)
			{
				
				l=this.left.numberOfChilds();
			}
		if(this.right!=null)
			{
				r=this.left.numberOfChilds();
			}
		return 1+l+r;		
	}	
}

module.exports = Node;
