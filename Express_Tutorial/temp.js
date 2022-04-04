const tempData = [{
    "Name": "User_1",
    "Age": 21,
    "Gender": "Male",
    "Address": "Khanh Hoa",
    "Github": "https://github.com/Quang-Dobe"
},
{
    "Name": "User_2",
    "Age": 21,
    "Gender": "Female",
    "Address": "West of HoChiMinh",
    "Github": "https://github.com/Quang-Dobe"
},
{
    "Name": "User_3",
    "Age": 18,
    "Gender": "Male",
    "Address": "Viet Nam",
    "Github": "https://github.com/Quang-Dobe"
}]

const search = { "N": "U" }
const searchData = tempData.filter((data) => {
    return data.Name.startsWith(search)
})
console.log(searchData)