function ManagementTask(){    
    let tasks  = []
    
    return {
       addTask(title){
       tasks.push({title , status: "pending"})
      return this
    },
    markComplete(){
    tasks = tasks.map(task => ({task, status:"complete"}))
     return this
    },
    filterTask(status){
    tasks = tasks.filter(task => task.status == status)
    return this
    },
    listTasks(){
    tasks.forEach(task => console.log(`${task.title} : ${task.status}`))
    return this
    },
    sortTasks(){
    tasks.sort((x,y)=>x.title.localecompare(y.title))
    return this
    },
    countTasks(){
    const count = tasks.reduce((acc, currTask) => {acc[task.status] == (acc[task.status] || 0) + 1
     return acc
    }, {})
    console.log(count.pending , count.complete)
    return this
      }
    }
    
    }
    
    ManagementTask.addTask("learn DSA")
                  .markComplete("complete")
                  .filterTask("pending")
                  .listTasks()
                  .sortTasks()
                  .countTasks()
    