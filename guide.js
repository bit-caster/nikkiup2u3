var facet = [
    ["华丽", "皆可", "简约"],
    ["成熟", "皆可", "可爱"],
    ["优雅", "皆可", "活泼"],
    ["性感", "皆可", "清纯"],
    ["保暖", "皆可", "清凉"]
];

function createGuide() {
    $("#guide").empty();
    var $section = $("<p>");
    var $weight = $("<p>");
    var $tag = $("<p>");
    var theme = $("#theme").val();
    $section.append("内容:&nbsp;");
    $weight.append("权重:&nbsp;");
    $tag.append("标签:&nbsp;" + getTags(allThemes[theme]));

    for (var i in FEATURES) {
        console.log(i);
        var f = FEATURES[i];
        var weight = new Number($('#' + f + 'Weight').val());
        var radios = $('input[name=' + f + ']:radio'); //所有 type="raido" 且name属性值等于 %f 的 <input> 元素
        for (var j in radios) {
            var element = radios[j];
            if (true == element.checked) {
                if (i == FEATURES.length - 1) {
                    $section.append(facet[i][parseInt(element.value) + 1]);
                    $weight.append(weight.toFixed(2));
                } else {
                    $section.append(facet[i][parseInt(element.value) + 1] + ":");
                    $weight.append(weight.toFixed(2) + ":");
                }
                break;
            }
        }
    }
    $("#guide").append($section);
    $("#guide").append($weight);
    $("#guide").append($tag);
}

function getTags(level) {
    if (level.bonus) {
        var tag = new String();
        for (var i in level.bonus) {
            var info = level.bonus[i];
            tag += "[" + info.tag + "]加分";
            if (parseInt(info.weight) != 1) {
                tag += info.weight;
            }
            tag += info.base + ";"
        }
        return tag.substring(0, tag.length - 1);
    }
}

function addScore2Guide() {
    var $score = $("<p>");
    $score.append("总分:&nbsp;" + $("#cartTable tr:last td:first").text());
    $("#guide").append($score);
}
