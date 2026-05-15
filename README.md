1. find out about <picture> tag that allows to change the source based
on responsivness 
<picture key={index} className={img.classes}>
              <source media="(max-width: 767px)" srcSet={`${img.source}.jpg`} />
              <img src={`${img.source}-large.jpg`} alt={img.alt} />
            </picture>
