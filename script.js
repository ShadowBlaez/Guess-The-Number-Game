body {
  text-align: center;
  background-size: cover; /* background changes for when user wins */
  background-position: center;
  background-repeat: no-repeat;
  transition: background 2s ease; /* smooth transition effect */
}

.fireworks-background {
    background-image: url('fireworks-image.jpg'); /* fireworks image */
    background-color: transparent; /* Set an initial transparent background color */
}

h1 {
  font-size: 36px;
}
input {
  padding: 10px;
  margin: 10px;
  font-size: 24px;
}

button {
  padding: 10px 20px;
  font-size: 24px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: transform 0.3s; /*change button size */
}

button:hover {
  background-color: #3e8e41;
  transform: scale(1.1); /*change button size */
}

#score{
  color:red;
  font-size: 36px;
}
