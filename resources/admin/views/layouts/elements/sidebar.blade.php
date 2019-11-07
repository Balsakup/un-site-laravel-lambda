<div class="sidebar">
    <nav class="sidebar-nav">
        <ul class="nav">
            <li class="nav-item">
                <a href="{{ route('admin::dashboard.home') }}" class="nav-link">
                    <span class="nav-icon fa fa-tachometer-alt"></span> Tableau de bord
                </a>
            </li>
            <li class="nav-title">Blog</li>
            <li class="nav-item">
                <a href="{{ route('admin::categories.index') }}" class="nav-link">
                    <span class="nav-icon fa fa-tags"></span> Catégories
                </a>
            </li>
        </ul>
    </nav>
    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div>
