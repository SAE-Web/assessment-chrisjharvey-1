const worldLeaders = [{
    firstName: "Sanna",
    lastName: "Marin",
    officialTitle: "Prime Minister",
    country: "Finland",
    dateAppointed: "2019-12-10"
},
{
    firstName: "Sophie",
    lastName: "Wilmés",
    officialTitle: "Prime Minister",
    country: "Belgium",
    dateAppointed: "2019-10-27"
},
{
    firstName: "Paula-Mae",
    lastName: "Weekes",
    officialTitle: "President",
    country: "Belgium",
    dateAppointed: "2018-08-19"
},
{
    firstName: "Jacinda",
    lastName: "Arden",
    officialTitle: "Prime Minister",
    country: "New Zealand",
    dateAppointed: "2017-11-30"
},
{
    firstName: "Tsai",
    lastName: "Ing-wen",
    officialTitle: "President",
    country: "Taiwan",
    dateAppointed: "2016-05-20"
},
{
    firstName: "Angela",
    lastName: "Merkel",
    officialTitle: "Chancellor",
    country: "Germany",
    dateAppointed: "2005-11-22"
}];

const fullName = () => {
    let name = worldLeaders[2].firstName + ' ' + worldLeaders[2].lastName;
    return console.log(name + ' ' + name.length);

}
 fullName();

 for (let i = 0; i < worldLeaders.length; i++) {
     let name1 = worldLeaders[i].firstName + ' ' + worldLeaders[i].lastName + ' ' + worldLeaders[i].country;
    console.log(name1 + ' ' + name1.length);
     
 }

const randomLeader = () => {
   button = document.getElementById('btn');
   text = document.getElementsByClassName('text');
   button.onclick = ()=> {
    
   }

   
}


 






