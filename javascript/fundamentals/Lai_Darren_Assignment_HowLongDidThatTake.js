// Rewrite isPrime() to calculate primes faster
Number.prototype.isPrime = function() {
        for( let i=2; i<Math.sqrt(this+1); i++) {
            if( this % i === 0 ) {
                return false;
            }
        }
        return true;
    }


// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
console.log(rFib(50));
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.log(iFib(50));
    
// Determine if the iterative or recursive Fibonacci function is faster
// iterative is faster because it stores the value in an array to be accessed later, whereas recursive requires calculating the same value increasingly many times as n increases

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);

//Write a more efficient function to reverse a string
// this function just loops through the string backwards instead of doing multiple different things to it. 
const reversed2 = string => {
    let reversedstr = "";
    for (let i = str.length-1; i >= 0, i--) {
        reversedstr += string[i];
    }
    return reversedstr;
}
console.log(reversed2(story));
