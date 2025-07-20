const generateUserCard = (user) => `
<div class="user-card">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
    <ul>
        ${user.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
</div>`;
// Test with:
const testUser = {name: "Alice", age: 28, skills: ["Python", "JavaScript", "React"]};
console.log(generateUserCard(testUser));