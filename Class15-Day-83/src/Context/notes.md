.const ThemeContext = (props) => {//we cn write "{children}"instead of props
  return (
    <div>
        {props.children} //then write here directly children
    </div>
  )
}