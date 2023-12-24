const assertion = () => {
  const Vtipo: any = "abcde" 
  // const Vtamanho: number = (Vtipo as string).length // pode usar no node e no jsx
  const Vtamanho: number = (<string>Vtipo).length // pode usar no node
  return Vtamanho
}

export default assertion
