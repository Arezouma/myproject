<template>
	<div class="users">
		<h1>Users</h1>
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter Name">
			<br />
			<input type="text" v-model="newUser.email" placeholder="Enter Email">
			<br />
			<input type="submit" value="submit">
		</form>
		<ul>
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span :class="{contacted:user.contacted}">
					{{user.name}} {{user.height}} {{user.mass}} {{user.hair_color}} {{user.skin_color}} <button v-on:click="deleteUser(user)">x</button>
				</span>
			</li>
		</ul>
		<table style="width: 80%">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Height</th>
					<th>Mass</th>
					<th>HairColor</th>
					<th>SkinColor</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user, index) in users">
					<td>{{index}}</td>
					<td>{{user.name}}</td>
					<td>{{user.height}}</td>
					<td>{{user.mass}}</td>
					<td>{{user.hair_color}}</td>
					<td>{{user.skin_color}}</td>
					
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'users',
		data() {
			return {
				newUser: {},
				users: []
			}
		},
		methods: {
			addUser: function(e){
				this.users.push({
					name: this.newUser.name,
					email: this.newUser.email,
					contacted: false
				});
				e.preventDefault();
			},
			deleteUser: function(user){
				this.users.splice(this.users.indexOf(user),1);
			}
		},
		created: function(){
			fetch('https://swapi.co/api/people/')
			.then(r => r.json())
			.then(json => {
				this.users = json.results;
			});
		}
	}
</script>

<style scoped>
	.contacted{
		text-decoration: line-through;
	}
	table, th, td {
		border: 1px solid black;
		border-collapse: collapse;
	}
	th, td {
		padding: 5px;
		text-align: center;
	}
	th {
		background-color: black;
		color: white;
	}
	tr:hover {
		background-color: green;
	}
	td {color: black;}


</style>
