// ダミーデータ
const data = [
  {name:'-', email:'-', tel:'-'},
  {name:'Taro', email:'taro@yamada', tel:'090-999-999'},
  {name:'Hanako', email:'hanako@flower', tel:'080-888-888'},
  {name:'Sachiko', email:'sachiko@happy', tel:'070-777-777'}
]

export default function handler(req, res) {
  if (req.method == 'GET') {
    res.status(200).send('Cannot access this api.')
    return
  }
  if (req.method == 'POST') {
    const id = req.query.id ? +req.query.id : 0
    const result = data[id] ? data[id] : data[0]
    res.status(200).json({id:id, data:result})
    return
  }
  // 必要なだけHTTPメソッド処理を用意
}

