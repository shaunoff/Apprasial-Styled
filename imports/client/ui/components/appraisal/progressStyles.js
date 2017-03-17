export let progressStyles = {
  progressContainer: {
    maxWidth: '220px',
    flex:'1',
    minHeight: '720px',
    margin: '15px 0px 15px 15px',
    display: 'flex',
    flexDirection: 'column',
    border: "2px solid #ccc",
    borderRadius: '8px',
    background: "white",
  },
  header: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#ccc'
  },
  headerComplete: {
    color: '#007681'
  },
  headerActive: {
    color: '#6bada7'
  },

  textComplete: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#007681'
  },
  textActive: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#6bada7'
  },
  textInactive: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#ccc'
  },
  circleActive: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    background:'white',
    borderRadius: '40px',
    border: '2px solid #6bada7',
    zIndex: '3',
    marginRight: '8px'
  },
  circleComplete: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    background:'white',
    borderRadius: '40px',
    border: '2px solid #007681',
    zIndex: '3',
    marginRight: '8px'
  },
  circleInactive: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    background:'white',
    borderRadius: '40px',
    border: '2px solid #ccc',
    zIndex: '3',
    marginRight: '8px'
  },
  numberActive: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#6bada7'
  },
  numberInactive: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#ccc'
  },
  lineComplete:{
    position:'relative',
    top: '16px',
    left: '-6px',
    height: '12px',
    width: '2px',
    background: '#007681'
  },
  line1Active:{
    position:'relative',
    top: '16px',
    left: '-3px',
    height: '12px',
    width: '2px',
    background: '#6bada7'
  },
  line2Active:{
    position:'relative',
    top: '16px',
    left: '-4px',
    height: '12px',
    width: '2px',
    background: '#6bada7'
  },
  line1Inactive:{
    position:'relative',
    top: '16px',
    left: '-3px',
    height: '12px',
    width: '2px',
    background: '#ccc'
  },
  line2Inactive:{
    position:'relative',
    top: '16px',
    left: '-4px',
    height: '12px',
    width: '2px',
    background: '#ccc'
  },

}
