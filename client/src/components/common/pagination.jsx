import React, { Component } from "react";
import ReactPaginate from "react-paginate";

export const totalPages = data => {
  return [...Array(data.data.total_pages).keys()].filter(x => x !== 0);
};

const Paginateion = ({ totalPages, handlePageChange, forcePage }) => {
  return (
    <div >
      {totalPages.length > 1 ? (
        <ReactPaginate
          previousLabel={"<-"}
          previousLinkClassName={"previous-pagination-butto"}
          nextLinkClassName={"next-pagination-butto"}
          nextLabel={"->"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages.length - 1}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeLinkClassName={"active-page-paginate"}
          pageLinkClassName={"each-page-paginate"}
          forcePage={forcePage}
        />
      ) : null}
    </div>
  );
};

export default Paginateion;


// class Pagination extends Component {
// constructor(prpos) {
//   super(prpos);
//   this.state = {
//     totalPages: []
//   }}
// componentDidMount(){
//   this.totalPages(this.props.data)
// }
//  totalPages = data => {
//   this.setState({totalPages: [...Array(data.data.total_pages).keys()].filter(x => x !== 0) }) 
// };

//   render() {
//     return ( 
//   <div >
//   {this.state.totalPages.length > 1 ? (
//     <ReactPaginate
//       previousLabel={"<-"}
//       previousLinkClassName={"previous-pagination-butto"}
//       nextLinkClassName={"next-pagination-butto"}
//       nextLabel={"->"}
//       breakLabel={"..."}
//       breakClassName={"break-me"}
//       pageCount={this.state..totalPages.length - 1}
//       marginPagesDisplayed={1}
//       pageRangeDisplayed={2}
//       onPageChange={this.props.handlePageChange}
//       containerClassName={"pagination"}
//       subContainerClassName={"pages pagination"}
//       activeLinkClassName={"active-page-paginate"}
//       pageLinkClassName={"each-page-paginate"}
//       forcePage={this.props.forcePage}
//     />
//   ) : null}
// </div>
//  );
//   }
// }

// export default Pagination;