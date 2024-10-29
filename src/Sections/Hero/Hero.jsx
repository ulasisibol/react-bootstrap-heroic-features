import '../Hero/Hero.scss'
export function Hero() {
    return (

<div className="px-4 py-5 my-5 text-center card">
  <h1 className="display-5 fw-bold text-body-emphasis">A warm welcome!
  </h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">
    Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
    </p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
       Call The Action
      </button>
     
    </div>
  </div>
</div>
    )
}