import React from 'react'

class AddPlant extends React.Component{
  constructor(props){
    super(props);
    this.state={
      plantName:"",
      plantPrice:0
    }

  }
   render(){
    return (
      <>
        <form className='row mt-4' onSubmit={(e) => {e.preventDefault(); 
          this.props.addPlant(this.state.plantName,Number(this.state.plantPrice));}}>
          <div className="mb-3 col-5">
            <label htmlFor="pName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="pName"
              name="plantName"
              value={this.state.plantName}
              onChange={(e) => { this.setState({ plantName : e.currentTarget.value }); } } />
          </div>
          <div className="mb-3 col-5">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="plantPrice"
              value={this.state.plantPrice}
              onChange={(e) => { this.setState({ plantPrice : Number(e.currentTarget.value) }); } } />
          </div>

          <button type="submit" className="btn btn-primary col-2 mt-4" >
            Add Product
          </button>
        </form>
      </>

    );
   
  }
}

export default AddPlant;