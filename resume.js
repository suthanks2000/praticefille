let my_resume={
    name:"k.suthan",

    mobile_no:"+919384340144",

    objective:"Skilled Civil Engineer known for designing functional and lasting Transportation and habitation solutions. Integrates deep knowledge of human and natural impact to optimize locations for throughput and Resource management. Dedicated to creating spaces tailored to provide Reliable travel and comfortable living for all individuals",
   
    personal_details:{
                        DOB:"12.11.2000",
                        father_name:"kannan",
                        email:"suthanks20002gmail.com",
                        hobbies:["reading","cricket","running"],
                        languages:["tamil","malayalam","english"],
                        
                        addresss:{
                                    door_no:"1A/6",
                                    street_name:"anna_nager",
                                    area_name:"vadveswaram",
                                    city:"nagercoil",
                                    district:"kanyakumari",
                                    pincode:629002
                                    }
                        },

   education:[
                  {
                      ins_name:"d.v.d.hr.sec.school",
                      course:"sslc",
                      percentage:88,
                      year:"2010-2015",
                      place:"kottar"
                  },
                  {
                     ins_name:"d.v.d.hr.sec.school",
                      course:"hsc",
                      percentage:90,
                      year:"2015-2017",
                      place:"kottar" 
                  },
                  {
                      ins_name:"univercity college of engineering",
                      course:"civil engineering",
                      percentage:85,
                      year:"2019-2022",
                      place:"konam"
                  }        
                ],
    
    skills:["1.autocad",
              "2.revit",
              "3.python" ,
              "4.html"],
    
        experience:[
                        {
                           companay_name:"Nakshatech Pvt Ltd",

                           work_details:"Working in Autocad 2D&3D,Revit Architecture According to the client needs they give the inputs",

                           role:"design engineer",

                           working_year:1
                        },
                        
                        {
                            company_name:"magna soft",

                            working_details:"revit design in point could using the revit software",

                            role:"revit engineer",

                            working_year:1.6


                        }
                    ],         
    

    projects_working:
                        [
                            {
                                project_name:"Planning and designing of Water Tank",
                                project_details:"using the autocad design the water tank and calucalte the strenth"
                            },

                            {
                                 project_name:"lanning and designing of Marriage Hall Building",
                                 project_details:"calulate the value of the total area of maarrige hall and design the marriage hall"
                            },
                                 
                            {
                                project_name:"Experimental Investigation of Concrete with partially replaced by Fine Aggregate by Saw Dust",
                                project_details:"using the concreate replcae the cement that place saw dust find the value of the concrete strenth and tension"

                            }
                        ],                                                             
                                                                                      
    
    declaration:"I do hereby declare the information furnished above are true, complete and correct to the best of my knowledge and belief",
}

for (let skill of my_resume.skills){
    console.log(skill)
}