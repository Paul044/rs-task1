const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize==null)
		{
			this.maxSize=30;
		}
		else
		{			
			this.maxSize=maxSize;
		}

		this.heap =new MaxHeap();
		
	}

	push(data, priority) {

		if(this.heap.size()>=this.maxSize)
		{
			throw exeption
		}
		else
		{
			this.heap.push(data, priority);
		}
		
	}

	shift() {
		if (this.size()==0)
		{
			throw exeption
		}
		else
		{
			return this.heap.pop();
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
