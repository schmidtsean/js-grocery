const styles = {
  link: { 
    cursor: 'pointer', 
    textDecoration: 'underline', 
    color: 'blue',
    marginLeft: '5px',
    marginRight: '5px',
  }
}
const filterLink = (current, item, setFilter) => {
  if (current === item) {
    return <span>{item}</span>
  } else {
    return <span style={styles.link} onClick={() => setFilter(item)}>{item}</span>
  }
}
const Footer = ({ filter, setFilter}) => {
  return (
    <div>
      {
        ['All', 'Active', 'Completed'].map( g => filterLink(filter, g, setFilter))
      }
    </div>
  )
}
export default Footer;