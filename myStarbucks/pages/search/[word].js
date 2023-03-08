import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "src/components/search/Item";

const Post = () => {
  const router = useRouter();
  const { word } = router.query; // id 프로퍼티 값은 {"id" : "2"}가 됨

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${word}.json`;

  //axios 요청 메소드의 두 번째 인자로 config 객체를 넘길 수 있습니다

  // config 객체
  // axios.get('/api/todos', {
  //   params: { // query string
  //     title: 'NEXT JS'
  //   },
  //   headers: { // 요청 헤더
  //     'X-Api-Key': 'my-api-key'
  //   },
  //   timeout: 3000 // 1초 이내에 응답이 오지 않으면 에러로 간주
  // }).then(res => {
  //     console.log(res)
  // })

  function getData() {
    Axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (word && word.length > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
