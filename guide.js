var facet = [
  ["华丽","皆可","简约"],
  ["成熟","皆可","可爱"],
  ["优雅","皆可","活泼"],
  ["性感","皆可","清纯"],
  ["保暖","皆可","清凉"]
]; 

function createGuide(){
  $("#guide").empty();
  var $section = $("<p>");
  for (var i in FEATURES) {
    console.log(i);
    var f = FEATURES[i];
    var weight = $('#' + f + 'Weight').val();
    var radios = $('input[name=' + f + ']:radio');//所有 type="raido" 且name属性值等于 %f 的 <input> 元素
    for (var j in radios) {   
      var element = radios[j];
      if (true == element.checked) {
        $section.append(facet[i][parseInt(element.value)+1] + "&nbsp;&nbsp;:&nbsp;" + weight+"</br>");
        console.log($section);
        break;
      }
    }   
  }
  $("#guide").append($section);
}