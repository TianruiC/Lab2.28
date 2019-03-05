var CourseMaker=function(name,title,day,time){
  return{
    name:name,
    title:title,
    day:day,
    time:time
  }
}

var data=[
    CourseMaker("Course","Title","Day","Time"),
    CourseMaker("JPN 120","Fundamentals of Japanese-II","MWF","08:00-09:00"),
    CourseMaker("CSC 339","Topics: Artificial Intelligence","MWF","10:20-11:20"),
    CourseMaker("MAT 360","Differential Equations","MWF","11:30-12:30"),
    CourseMaker("PHY 110","Intro to Physics","MWF","12:40-13:40"),
    CourseMaker("MAT 171","Calculus-II","MWF","13:50-14:50"),
    CourseMaker("ECO 260","Financial Accounting","MWF","15:00-16:00"),
    CourseMaker("CSC 265","Web, Data, and Design","TR","12:40-15:40"),


];

var table =d3.select(".box").append("table");
var rows=table.selectAll("tr")
              .data(data)
              .enter()
              .append("tr");

rows.append("td")
    .text(function(d){
      return d.name
    })
    .style("color","#279B7F");
    //.style("color","red");
    rows.append("td")
        .text(function(d){
          return d.title
        })
    .style("color","#D8C741");
rows.append("td")
    .text(function(d){
      return d.day
    })
    .style("color","#F6B334");
rows.append("td")
    .text(function(d){
        return d.time
    })
    .style("color","#E54F49");
table.style("background-color","#173142")
      .style("border","dashed");
