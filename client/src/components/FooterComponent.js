function FooterComponent() {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <label >&copy; 2024, Dang Tuan Anh, Nguyen</label><br />
                <label>Maharishi International University</label><br />
                <label>1000 N 4th Street, Fairfield, Iowa - 52557</label><br />
            </div>
            <div className="footer-right">
                <a href="#">  <span class="material-symbols-outlined">mail</span></a>
                <a href="#">  <span class="material-symbols-outlined">public</span></a>
                <a href="#">  <span class="material-symbols-outlined">compost</span></a>
                <a href="#">  <span class="material-symbols-outlined">eco</span></a>
            </div>
        </div>
    )
}

export default FooterComponent