import React from "react";
import MenuItem from "../menuItems/menuitems.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					id: 1,
					title: "SHOES",
					linkUrl: "shoes",
					imageUrl:
						"https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
				},
				{
					id: 2,
					title: "SHIRTS",
					linkUrl: "",
					imageUrl:
						"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
				},
				{
					id: 3,
					title: "TROUSERS",
					linkUrl: "",
					imageUrl:
						"https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJvdXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
				},
				{
					id: 4,
					title: "MEN",
					linkUrl: "",
					size: "large",
					imageUrl:
						"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-biracial-man-posing-picture-id1292475584?b=1&k=20&m=1292475584&s=170667a&w=0&h=jZ6etD3dfOV_NIgwR9hIQ5B9TBC5kpYxShIsaqjWbzc=",
				},
				{
					id: 5,
					title: "WOMEN",
					size: "large",
					linkUrl: "",
					imageUrl:
						"https://media.istockphoto.com/photos/beautiful-girl-with-curly-hairstyle-picture-id1289362630?b=1&k=20&m=1289362630&s=170667a&w=0&h=n6Hp9-580jurTD8plgB4qVkI2-j6rZMYL-MXxIbd6Ng=",
				},
			],
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSection }) => (
					<MenuItem key={id} {...otherSection} />
				))}
			</div>
		);
	}
}

export default Directory;
