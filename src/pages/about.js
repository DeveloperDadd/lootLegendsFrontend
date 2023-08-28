export default function About() {

  useEffect(() => {
    // Function to retrieve user data from local storage
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user); 
        dispatch({
            type: 'SET_USER',
            payload: user
        });
      }
    };

    getUserFromLocalStorage();
    
  }, []);
    
    return (<div>
      <h1>About Loot Legends: Uniting Gamers, Forging Legends</h1>
    <p>At Loot Legends, our passion for gaming knows no bounds. We've built a vibrant and inclusive online sanctuary that brings together gamers from all walks of life, united by their love for virtual adventures, strategic battles, and the pursuit of epic loot. Our journey began with a simple yet powerful idea: to create a space where players could connect, share, and thrive within a community that understands and celebrates the essence of gaming.</p>

    <h2>A Community of Legends</h2>
    <p>Loot Legends is more than just a platform; it's a dynamic community where gaming enthusiasts can experience the thrill of camaraderie, teamwork, and victory. Our diverse community consists of players from around the globe, representing a wide spectrum of gaming genres and styles. Whether you're a seasoned raider, a competitive PvP champion, or an explorer seeking new horizons, you'll find your place among fellow Legends who share your passion.</p>

    <h2>Endless Adventures, Shared Triumphs</h2>
    <p>With an extensive selection of over 100 games, Loot Legends offers a limitless playground for exploration and conquest. Our platform is designed to cater to every gaming preference, providing a hub where you can discover new titles, discuss strategies, and engage in unforgettable adventures with like-minded players. Forge alliances for raids, participate in fierce PvP battles, or simply share your most triumphant loot moments—the possibilities are as diverse as our community.</p>

    <h2>Empowering Connections</h2>
    <p>At the heart of Loot Legends lies the power of connection. Through our intuitive interface, players can effortlessly find allies to embark on quests, partake in dungeons, or explore virtual realms. Our platform encourages you to discover new friends who share your interests, fostering relationships that extend beyond the pixels on the screen. The bonds formed within our community are as genuine as they are enduring, proving that gaming has the ability to unite souls across borders and backgrounds.</p>

    <h2>Celebrating Victories, Amplifying Stories</h2>
    <p>Every achievement in gaming deserves to be celebrated. Loot Legends provides a space for you to share your proudest moments, be it a hard-fought victory, a rare loot find, or a particularly creative gameplay clip. Our platform allows you to showcase your skills, inspire others, and amplify the stories that make gaming an unforgettable journey.</p>

    <h2>Our Vision for the Future</h2>
    <p>As we continue to evolve, Loot Legends remains committed to enhancing the gaming experience for each member of our community. We're dedicated to refining our platform, offering innovative features, and creating events that bring our Legends closer together. Our vision is to be the go-to hub where gamers of all kinds can find their tribe, evolve their skills, and make lasting memories.</p>

    <h2>Join the Legends</h2>
    <p>Loot Legends is more than a destination; it's a movement driven by the collective passion of gamers who believe in the power of connection and shared experiences. Whether you're a casual player, a competitive champion, or anything in between, you're invited to join our community of Legends. Let's embark on this epic journey together, where every game is a story waiting to be told, and every victory is a testament to the spirit of camaraderie that defines Loot Legends. Join us today and be a part of the legacy.</p>
  </div>
  )}