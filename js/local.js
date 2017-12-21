function get_list() {
    var list = new Array;
    var list_str = localStorage.getItem('id');
    if (list_str !== null) {
        list = JSON.parse(list_str); 
    }
    return list;
}
function submit() {
    var name = document.getElementById('submit').value;
      document.getElementById("submit").value = "";
if(name==''){
    alert('Your content:');
}
else{
    var list = get_list();
    list.push(name);
    localStorage.setItem('student', JSON.stringify(list));
    show();
    return false;
}
}
function remove() {
    var id = this.getAttribute('id');
    var list = get_list();
    list.splice(id, 1);
    localStorage.setItem('student', JSON.stringify(list));
 
    show();
 
    return false;
} 
function show() {
    var list = get_list();
 
    var html = '<ol>';
    for(var i=0; i<list.length; i++) {
        html += '<li>' + list[i] +'                                   <button class="remove" id="' + i  + '">Remove</button></li>';
    };
    html += '</ol>';
    document.getElementById('show').innerHTML = html;
      var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
document.getElementById('add').addEventListener('click', add);
show();