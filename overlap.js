// An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, 
// and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, 
// and its left and right edges are parallel to the Y-axis.

// Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

// Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

// Example 1:
// Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// Output: true

// Example 2:
// Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// Output: false

// Example 3:
// Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
// Output: false
// /**
//  * @param {number[]} rec1
//  * @param {number[]} rec2
//  * @return {boolean}
//  */

var isRectangleOverlap = function(rec1, rec2) {
    let [xA1, yA1, xA2, yA2] = rec1;
    let [xB1, yB1, xB2, yB2] = rec2;
    
    let xStart = Math.max(xA1, xB1);
    let xEnd = Math.min(xA2, xB2);
    
    let lenX = xEnd - xStart;
    
    let yStart = Math.max(yA1, yB1);
    let yEnd = Math.min(yA2, yB2);
    
    let lenY = yEnd - yStart;
    
    return (lenX > 0) && (lenY > 0)
          
};

console.log(isRectangleOverlap([0,0,2,2], [1,1,3,3]));
console.log(isRectangleOverlap([0,0,1,1], [1,0,2,1]));
console.log(isRectangleOverlap([0,0,1,1], [2,2,3,3]));