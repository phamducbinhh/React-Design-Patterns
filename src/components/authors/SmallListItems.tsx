type Author = {
  name: string
  age: number
}
export const SmallAuthorListItem = ({ author }: { author: Author }) => {
  const { name, age } = author
  return (
    <p>
      {' '}
      Name: {name}, Age: {age}
    </p>
  )
}
