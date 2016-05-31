function answer_1() {

  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";

}



function answer_2() {
   document.getElementById("q2-answer").innerHTML = "<ul><li>JavaScript can add or remove existing elements and attributes</li><li>JavaScript can react to events happening in a page</li></ul>";
}

function answer_3() {
   var answer = document.getElementsByClassName("q34-answer");
   answer[0].innerHTML = "<ul><li>Parent Node: A node directly above a node</li><li>Child Node: Nodes one level directly below</li><li>Sibilng Nodes: Nodes at the same level (same parent node)</li><li>Descendant Nodes: A set of nodes any number of levels below another node</li><li>Ancestor Nodes: A set of nodes above a node in a tree</li></ul>";
}

function answer_4() {
   var answer = document.getElementsByClassName("q34-answer");
   answer[1].innerHTML = "<ul><li>document.getElementById() : only one Element located in top level</li><li>document.getElementsByClassName() : Many Elements</li><li>document.getElementsByName() : Many Elements</li><li>document.getElementsByTagName() : Many Elements</li></ul>";
}

$('a').click(function() {
   $(this).text("Answer 5");
})

$('.item').click(function() {
   $(this).attr('style', 'font-size: 3em');
})
$('.demo:nth-child(odd)').dblclick(function() {
   $(this).attr('style', 'color: blue');
})