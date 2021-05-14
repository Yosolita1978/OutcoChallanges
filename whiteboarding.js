// // On LinkedIn, you can say that you have a specific skill. That it's a feature called it: 
// "Endorsement." An object "endorsement" looks like this:
// // endors = [{ user: "Abby",
// //             skill: ["python"]},
// //           { user: "Jack",
// //             skill: ["javascript", "python"]}]
// // Write a function that receive a list of endorsement object a return a list object for skills
// // Output:
// // {skill: "python",
// //  users: ["Abby", "Jack"]}]


function makeSkillsObj(endorsement){
    const skills = {};
    for (endorsmen in endorsement){
      const skillList = endorsement[endorsmen]["skill"];
      for (skill in skillList){
        let skillTitle = skillList[skill];
        if(!(skillTitle in skills)){
          skills[skillTitle] = [endorsement[endorsmen]["user"]];
        } else{
          skills[skillTitle].push(endorsement[endorsmen]["user"]);
        }
      }
    }
    return skills;
  }
  
  let endors = [{ user: "Abby", skill: ["python"]}, { user: "Jack", skill: ["javascript", "python"]}];
  let skills = makeSkillsObj(endors);
  console.log(skills);