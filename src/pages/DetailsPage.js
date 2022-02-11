import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import itemDetails from "json/itemDetails.json"
import BookingForm from "parts/BookingForm";

// After API
import { checkoutBooking } from "store/actions/checkout";

class DetailsPage extends Component {
  componentDidMount() {
    window.title= "Home";
    window.scrollTo(0, 0)
  }

  render() {
    const breadcrumb = [
      {pageTitle: "Home", pageHref: ""},
      {pageTitle: "Home Details", pageHref:""}
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
        breadcrumb={breadcrumb}
        data={itemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>

        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={itemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={itemDetails} startBooking={this.props.checkoutBooking} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={itemDetails.categories}></Categories>

        <Testimony data={itemDetails.testimonial}></Testimony>

        <Footer/>
      </>
    )
  }
}

export default connect(null, { checkoutBooking})(DetailsPage);

// class DetailsPage extends Component {
//   componentDidMount() {
//     window.scrollTo(0, 0);

//     if (!this.props.page[this.props.match.params.id])
//       this.props
//         .fetchPage(
//           `/detail-page/${this.props.match.params.id}`,
//           this.props.match.params.id
//         )
//         .then((response) => {
//           document.title = `Staycation | ${response.title}`;
//         });
//   }

//   render() {
//     const { page, match } = this.props;

//     if (!page[match.params.id]) return null;

//     const breadcrumb = [
//       { pageTitle: "Home", pageHref: "" },
//       { pageTitle: "House Details", pageHref: "" },
//     ];

//     return (
//       <>
//         <Header {...this.props} />
//         <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
//         <FeaturedImage data={page[match.params.id].imageId} />
//         <section className="container">
//           <div className="row">
//             <div className="col-7 pr-5">
//               <Fade bottom>
//                 <PageDetailDescription data={page[match.params.id]} />
//               </Fade>
//             </div>
//             <div className="col-5">
//               <Fade bottom>
//                 <BookingForm
//                   itemDetails={page[match.params.id]}
//                   startBooking={this.props.checkoutBooking}
//                 />
//               </Fade>
//             </div>
//           </div>
//         </section>

//         <Activities data={page[match.params.id].activityId} />
//         <Testimony data={page[match.params.id].testimonial} />

//         <Footer />
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   page: state.page,
// });

// export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
//   DetailsPage
// );
