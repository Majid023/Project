




module.exports = {

    attributes: {
        uid:{
          type:"string",
          unique:"true",
          require:"true"
        },
        name:{
            type:"string",
            require:"true"
        },
        academic_year:{
            type:"string",
            require:"true"
        },
        programe:{
            type:"string",
            require:"true"
        },
        sem:{
            type:"string",
            require:"true"

        },
        courses:[
            {
                sno:{ type:"string" },
                title:{type:"string"},
                unit:{type:"int32"},
                grage:{type:"string"}
            },{ sno:{ type:"string" },
                title:{type:"string"},
                unit:{type:"int32"},
                grage:{type:"string"}
            },{ sno:{ type:"string" },
                title:{type:"string"},
                unit:{type:"int32"},
                grage:{type:"string"}
            },{ sno:{ type:"string" },
                title:{type:"string"},
                unit:{type:"int32"},
                grage:{type:"string"}
            },{ sno:{ type:"string" },
                title:{type:"string"},
                unit:{type:"int32"},
                grage:{type:"string"}
            },{ sno:{ type:"string" },
                title:{type:"string"},
                unit:{type:"int32"},
                grage:{type:"string"}}
        ]
    },
    connection:"mongodb"
  };
  
  