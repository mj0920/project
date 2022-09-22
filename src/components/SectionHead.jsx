

const SectionHead = ({icon, title , className}) => {
  return (
    <div>
        
        
    <div className={`section__head ${className}`}></div>
    <span >{icon}</span>
    <h2>{title}</h2>
    
    
    </div>
  )
}

export default SectionHead