var teacher = "Lucky";  // global 
function fun(name) {     // global 
  console.log(teacher, name);
}
function gun()          // global 
{
  var teacher = "Yash";    // teacher -> gun
  fun("Why!");
}   

gun();