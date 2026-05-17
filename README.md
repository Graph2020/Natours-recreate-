1. find out about <picture> tag that allows to change the source based
on responsivness 
<picture key={index} className={img.classes}>
              <source media="(max-width: 767px)" srcSet={`${img.source}.jpg`} />
              <img src={`${img.source}-large.jpg`} alt={img.alt} />
            </picture>

2. createElement(EarthModel), if your file is just ts or js jsx won't be alowed so createElements needed it the same as <Component />

3. Placeholder-not-snown you can do smt when placeholder is not shown
