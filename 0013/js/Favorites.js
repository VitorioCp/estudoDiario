// classe que vai conter a lógica dos dados

import { GithubUser } from "./GithuberUser.js";

//como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }
  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }
  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username);

      if (userExists) {
        throw new Error("O usuário selecionado já está presente na lista");
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado");
      }

      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  delete(user) {
    const filteredEntries = this.entries.filter((entry) => {
      entry.login !== user.login;
    });
    this.entries = filteredEntries;
    this.update();
    this.save();
  }
}

//classe que vai criar a visulização e eventos do HTML

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
    this.onadd();
  }

  onadd() {
    const addButton = this.root.querySelector(".search button");
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");

      this.add(value);
    };
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;

      row.querySelector(".user img").alt = `Imagem de ${user.name}`;

      row.querySelector(".user p").textContent = user.name;

      row.querySelector(".user a").href = `https://github.com/${user.login}`

      row.querySelector(".user span").textContent = user.login;

      row.querySelector(".repositories").textContent = user.public_repos;

      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const IsOK = confirm("Tem certeza que deseja deletar essa linha?");
        if (IsOK) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
                
                    <td class="user">
                        <img src="" alt="">
                        <a href="">
                            <p></p>
                            <span></span>
                        </a>
                    </td>
                    <td class="repositories"></td>
                    <td class="followers"></td>
                    <td><button class="remove">&times;</button></td>
    
                
    `;
    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
