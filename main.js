let is_shop_open = true
let learning = (startlearning , time)=>{
    return new Promise((resolve , reject) =>{
        if(is_shop_open){
          setTimeout(()=>{
          resolve(startlearning())
          } , time)
        }else{
          reject(console.log('dokon yopiq'))
        }
    })
}
learning(()=>console.log('mijoz keldi') , 0)
      .then(()=>{return learning(()=>{console.log('buyurtma qabul qilindi')} , 1000)})
        .then(() =>{
        return learning(()=>{
        console.log('masalliglar olib kelindi')
        } ,2000)
    })
      .then(()=>{
        return learning(()=>{
        console.log('buyurtmani tayyorlash boshlandi')
        } , 2000)
    })
       .then(()=>{
        return learning(()=>{
        console.log('buyurtma tayyor boldi')
        } , 2000)
    })
       .then(()=>{
        return learning(()=>{
        console.log('mijozga berildi')
        } , 2000)
    })
       .then(()=>{
        return learning(()=>{
        console.log('mijozdan pul olindi')
        } , 2000)
    })
       .then(()=>{
        return learning(()=>{
        console.log('va dokon yopildi')
        } , 2000)
    })






