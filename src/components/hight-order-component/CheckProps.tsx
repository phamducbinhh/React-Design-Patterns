export default function CheckProps(Components: any) {
  return (props: any) => {
    console.log(props)
    return <Components {...props} />
  }
}
