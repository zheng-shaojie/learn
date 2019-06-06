import get from 'axios'

// 发送API请求
export function getPosts() {
  return get('http://jsonplaceholder.typicode.com/posts')
}
