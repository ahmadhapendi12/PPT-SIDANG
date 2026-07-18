/**
 * SISTEM INFORMASI MANAJEMEN PERSEDIAAN (SIMP) - LAZATTO STASIUN WALANTAKA
 * Presentasi Sidang Skripsi S1 - A. HAPENDI (NPM: 1101221160)
 * 
 * Script Engine Lengkap & Interaktif:
 * 1. Navigasi Slide (Tombol, Keyboard, Swipe Touch Mobile, URL Hash)
 * 2. Catatan Presenter Khusus Sidang Skripsi (Slide 1 - 17)
 * 3. Daftar 17 Slide Interaktif (Modal Grid)
 * 4. Simulasi Logika Min-Max Real-Time (Slide 4)
 * 5. Simulasi Transaksi Masuk/Keluar Live DB
 * 6. Tema Gelap/Terang & Mode Cetak PDF
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // DATA & KONFIGURASI 14 SLIDE SIDANG SKRIPSI
  // ==========================================
  const slideMetadata = [
    {
      id: 1,
      category: "Cover Skripsi",
      title: "Perancangan SIMP Lazatto Stasiun Walantaka",
      notes: "Selamat pagi/siang Yang Terhormat Dewan Penguji dan Dosen Pembimbing. Perkenalkan saya A. Hapendi (NPM 1101221160). Hari ini saya akan mempresentasikan skripsi saya mengenai Perancangan Sistem Informasi Manajemen Persediaan untuk Mengoptimalkan Stok Bahan Baku pada Lazatto Stasiun Walantaka."
    },
    {
      id: 2,
      category: "Bab I • Pendahuluan",
      title: "Latar Belakang & Identifikasi Masalah",
      notes: "Lazatto Stasiun Walantaka memiliki arus perputaran bahan baku yang sangat tinggi. Selama ini pencatatan masih konvensional (buku gudang fisik), sehingga sering terjadi selisih stok, overstock bahan kadaluwarsa, maupun understock (kehabisan bahan saat jam sibuk). Transformasi digital menjadi urgensi utama."
    },
    {
      id: 3,
      category: "Bab I • Pendahuluan",
      title: "Rumusan Masalah, Tujuan & Batasan",
      notes: "Fokus penelitian ini menjawab 3 hal: rancangan sistem berbasis web, penerapan metode Min-Max untuk efisiensi stok, dan pelaporan akurat. Batasan sistem berfokus pada manajemen logistik bahan baku dengan Laravel dan MySQL."
    },
    {
      id: 4,
      category: "Bab II • Landasan Teori",
      title: "Metode Pengendalian Persediaan (Min-Max Inventory)",
      notes: "Berdasarkan landasan teori dari Cahyani & Kartika (2020), metode Min-Max adalah mekanisme penataan ulang di mana batas Min menjadi titik pemicu pemesanan ulang dan batas Max menjadi target tingkat persediaan baru. Selisih antara Max dan Min diartikan sebagai EOQ (Economic Order Quantity). Silakan Dewan Penguji melihat simulasi interaktif di slide ini untuk mencoba skenario stok kritis, aman, dan berlebih."
    },
    {
      id: 5,
      category: "Bab II • Tinjauan Pustaka & Kebaruan Penelitian",
      title: "State of the Art: Perbedaan Penelitian Terdahulu & Novelty",
      notes: "Pada slide ini disajikan komparasi ringkas antara penelitian terdahulu dengan SIMP Lazatto pada aspek audit trail RBAC, kendali Min-Max real-time, dan rekonsiliasi stok dinamis. Terdapat pula 3 pilar novelty yaitu Rekonsiliasi Stok Dinamis Presisi, adaptasi Min-Max untuk fast food, serta pemisahan tugas operasional yang tegas."
    },
    {
      id: 6,
      category: "Bab III • Metodologi Penelitian",
      title: "Metodologi Pengembangan Sistem (SDLC Waterfall)",
      notes: "Model pengembangan menggunakan SDLC Waterfall (Ian Sommerville) melalui 5 tahapan berurutan: Requirement, Design, Implementation, Verification (Black Box 100% akurat), dan Maintenance."
    },
    {
      id: 7,
      category: "Bab IV • Analisis Sistem Berjalan",
      title: "Analisis Alur Kerja & Use Case Diagram Sistem Berjalan",
      notes: "Analisis alur sistem berjalan (manual) memperlihatkan Staff dan Admin yang masih mencatat mutasi di buku fisik serta merekap ke spreadsheet mingguan. Kelemahan utamanya adalah rawan human error dan ketiadaan indikator EWS saat stok menipis, yang menjadi landasan perancangan sistem usulan."
    },
    {
      id: 8,
      category: "Bab IV • Rancangan Sistem Usulan (UML 1)",
      title: "Use Case Diagram Sistem Usulan (SIMP Lazatto)",
      notes: "Use Case Diagram Sistem Usulan memodelkan interaksi 3 aktor utama (Staff Operasional, Admin Sistem, dan Owner) dalam sistem web terintegrasi. Admin dan Staff mengelola transaksi serta master data, sedangkan Owner memantau evaluasi EWS dan mengunduh laporan PDF."
    },
    {
      id: 9,
      category: "Bab IV • Rancangan Sistem Usulan (UML 2)",
      title: "Sequence Diagram & Class Diagram Arsitektur SIMP",
      notes: "Sequence diagram menjelaskan interaksi objek dari antarmuka hingga eksekusi query database. Sedangkan Class Diagram memodelkan arsitektur kelas User, Material, StockEntries, dan StockExits dengan kardinalitas One-to-Many."
    },
    {
      id: 10,
      category: "Bab IV • Rancangan Antarmuka & Struktur Menu",
      title: "Struktur Menu & Blueprint Wireframe Program (SIMP LSW)",
      notes: "Slide ini menampilkan rancangan struktur menu dan blueprint tampilan program (wireframe). Struktur pohon menu dibagi berdasarkan 3 peran aktor (Staff, Admin, Owner), lengkap dengan spesifikasi form input dan simulasi interaktif."
    },
    {
      id: 11,
      category: "Bab IV • Pelaporan & Evaluasi",
      title: "Laporan Manajemen & Peringatan Dini (Early Warning System)",
      notes: "Early Warning System (EWS) mendeteksi secara live saat stok menyentuh batas minimum dan memberi badge RE-ORDER. Seluruh laporan persediaan dan riwayat mutasi dapat diekspor ke format resmi PDF."
    },
    {
      id: 12,
      category: "Bab IV • Hasil Uji Coba",
      title: "Pengujian Fungsionalitas Sistem (Black Box Testing)",
      notes: "Seluruh skenario pengujian utama (Autentikasi RBAC, Master Min-Max, Transaksi, Rekonsiliasi Dinamis, dan Ekspor PDF) telah diuji menggunakan metode Black Box Testing dengan hasil 100% BERHASIL."
    },
    {
      id: 13,
      category: "Bab V • Penutup",
      title: "Kesimpulan & Saran Pengembangan",
      notes: "Kesimpulan penelitian ini: SIMP Lazatto berbasis web berhasil mengotomatisasi persediaan, mencegah stockout/overstock via Min-Max, dan menjaga akurasi lewat rekonsiliasi dinamis."
    },
    {
      id: 14,
      category: "Penutup • Sidang Skripsi",
      title: "Terima Kasih & Sesi Tanya Jawab",
      notes: "Terima kasih banyak kepada Dewan Penguji dan Dosen Pembimbing atas waktu, perhatian, serta bimbingannya. Saya siap menerima pertanyaan, masukan, dan arahan konstruktif dari Bapak/Ibu Dewan Penguji."
    }
  ];

  // ==========================================
  // STATE MANAGEMENT SLIDE
  // ==========================================
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  let currentSlideIndex = 0;

  // Baca hash dari URL apabila ada (#slide-X)
  const initialHash = window.location.hash;
  if (initialHash && initialHash.startsWith('#slide-')) {
    const slideNum = parseInt(initialHash.replace('#slide-', ''), 10);
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
      currentSlideIndex = slideNum - 1;
    }
  }

  const btnPrev = document.getElementById('btnPrevSlide');
  const btnNext = document.getElementById('btnNextSlide');
  const footerSlideText = document.getElementById('footerSlideText');
  const slideProgressFill = document.getElementById('slideProgressFill');

  function updateSlideDisplay() {
    slides.forEach((slide, idx) => {
      if (idx === currentSlideIndex) {
        slide.classList.remove('active');
        void slide.offsetWidth; // Force reflow agar transisi Morph berputar ulang setiap ganti slide
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update URL hash
    const slideNumber = currentSlideIndex + 1;
    if (history.replaceState) {
      history.replaceState(null, null, `#slide-${slideNumber}`);
    } else {
      window.location.hash = `slide-${slideNumber}`;
    }

    // Update progress bar & footer text
    if (footerSlideText) {
      footerSlideText.textContent = `Slide ${slideNumber} dari ${totalSlides}`;
    }
    if (slideProgressFill) {
      const percentage = (slideNumber / totalSlides) * 100;
      slideProgressFill.style.width = `${percentage}%`;
    }
    const badge = slides[currentSlideIndex] && slides[currentSlideIndex].querySelector('.slide-number-badge');
    if (badge) {
      badge.textContent = `Slide ${slideNumber} / ${totalSlides}`;
    }

    // Tombol Prev / Next state
    if (btnPrev) {
      btnPrev.disabled = (currentSlideIndex === 0);
    }
    if (btnNext) {
      btnNext.disabled = (currentSlideIndex === totalSlides - 1);
    }

    // Update isi catatan presenter apabila drawer sedang terbuka
    updatePresenterNotesContent();

    // Auto-scroll ke atas layar saat ganti slide di perangkat HP/Mobile
    if (window.innerWidth <= 992) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function goToNextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      currentSlideIndex++;
      updateSlideDisplay();
    }
  }

  function goToPrevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlideDisplay();
    }
  }

  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentSlideIndex = index;
      updateSlideDisplay();
    }
  }

  if (btnPrev) btnPrev.addEventListener('click', goToPrevSlide);
  if (btnNext) btnNext.addEventListener('click', goToNextSlide);

  // ==========================================
  // KEYBOARD NAVIGATION
  // ==========================================
  document.addEventListener('keydown', (e) => {
    // Jangan tangani keyboard jika user sedang mengetik di input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        goToNextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        goToPrevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
      case 'o':
      case 'O':
      case 'Escape':
        if (overviewModal && overviewModal.classList.contains('open')) {
          e.preventDefault();
          toggleOverviewModal(false);
        } else if (e.key === 'o' || e.key === 'O') {
          e.preventDefault();
          toggleOverviewModal(true);
        }
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 't':
      case 'T':
        e.preventDefault();
        toggleTheme();
        break;
    }
  });

  // ==========================================
  // MODE LAYAR PENUH (FULLSCREEN TANPA HALAMAN LAIN)
  // ==========================================
  const btnFullscreenToggle = document.getElementById('btnFullscreenToggle');
  const iconFullscreen = document.getElementById('iconFullscreen');

  function toggleFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  function updateFullscreenButtonUI() {
    const isFull = document.fullscreenElement || document.webkitFullscreenElement;
    document.body.classList.toggle('is-fullscreen-mode', Boolean(isFull));

    if (!btnFullscreenToggle) return;
    if (isFull) {
      btnFullscreenToggle.innerHTML = `<i class="fa-solid fa-compress" id="iconFullscreen"></i> Keluar Penuh`;
    } else {
      btnFullscreenToggle.innerHTML = `<i class="fa-solid fa-expand" id="iconFullscreen"></i> Layar Penuh`;
    }
  }

  if (btnFullscreenToggle) {
    btnFullscreenToggle.addEventListener('click', toggleFullscreen);
  }

  document.addEventListener('fullscreenchange', updateFullscreenButtonUI);
  document.addEventListener('webkitfullscreenchange', updateFullscreenButtonUI);

  // ==========================================
  // TOGGLE TEMA GELAP / TERANG (SUPPORT FULLSCREEN)
  // ==========================================
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const floatingThemeBtn = document.getElementById('floatingThemeBtn');

  const savedTheme = localStorage.getItem('simp_ppt_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.body.setAttribute('data-theme', savedTheme);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('simp_ppt_theme', newTheme);
  }

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', toggleTheme);
  }
  if (floatingThemeBtn) {
    floatingThemeBtn.addEventListener('click', toggleTheme);
  }

  // ==========================================
  // TOGGLE MODE RINGAN (CEPAT & ANTI-LAG DI LAPTOP)
  // ==========================================
  const btnLiteToggle = document.getElementById('btnLiteToggle');
  const savedLite = localStorage.getItem('simp_ppt_lite') === 'true';
  if (savedLite) {
    document.body.classList.add('lite-mode');
  }
  if (btnLiteToggle) {
    btnLiteToggle.addEventListener('click', () => {
      document.body.classList.toggle('lite-mode');
      const isLite = document.body.classList.contains('lite-mode');
      localStorage.setItem('simp_ppt_lite', isLite);
    });
  }

  // ==========================================
  // TOUCH / SWIPE NAVIGATION (RESPONSIVE MOBILE)
  // ==========================================
  let touchStartX = 0;
  let touchEndX = 0;

  const stage = document.querySelector('.stage-container');
  if (stage) {
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      // Abaikan swipe ganti slide jika user menggeser elemen tabel, grafik, atau slider
      if (e.target.closest('table') || e.target.closest('input[type="range"]') || e.target.closest('.info-card') || e.target.closest('.mockup-screen')) {
        return;
      }
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      goToNextSlide(); // Swipe kiri -> slide berikutnya
    } else if (touchEndX - touchStartX > swipeThreshold) {
      goToPrevSlide(); // Swipe kanan -> slide sebelumnya
    }
  }

  // ==========================================
  // CATATAN PRESENTER SIDANG SKRIPSI (DRAWER)
  // ==========================================
  const notesDrawer = document.getElementById('presenterNotesDrawer');
  const btnNotesToggle = document.getElementById('btnNotesToggle');
  const btnCloseNotes = document.getElementById('btnCloseNotes');
  const presenterNotesContent = document.getElementById('presenterNotesContent');

  function updatePresenterNotesContent() {
    if (!presenterNotesContent) return;
    const meta = slideMetadata[currentSlideIndex];
    if (meta) {
      presenterNotesContent.innerHTML = `
        <div style="font-weight: 800; font-size: 0.95rem; color: var(--accent-orange); margin-bottom: 8px;">
          Slide ${meta.id}: ${meta.title}
        </div>
        <div style="font-size: 0.88rem; line-height: 1.6; color: var(--text-main);">
          ${meta.notes}
        </div>
      `;
    }
  }

  function togglePresenterNotes(forceOpen) {
    if (!notesDrawer) return;
    const isOpen = typeof forceOpen === 'boolean' ? forceOpen : !notesDrawer.classList.contains('open');
    if (isOpen) {
      notesDrawer.classList.add('open');
      updatePresenterNotesContent();
    } else {
      notesDrawer.classList.remove('open');
    }
  }

  if (btnNotesToggle) btnNotesToggle.addEventListener('click', () => togglePresenterNotes());
  if (btnCloseNotes) btnCloseNotes.addEventListener('click', () => togglePresenterNotes(false));

  // ==========================================
  // DAFTAR 17 SLIDE (OVERVIEW MODAL)
  // ==========================================
  const overviewModal = document.getElementById('overviewModal');
  const btnOverviewToggle = document.getElementById('btnOverviewToggle');
  const btnCloseOverview = document.getElementById('btnCloseOverview');
  const overviewGrid = document.getElementById('overviewGrid');

  function buildOverviewGrid() {
    if (!overviewGrid) return;
    overviewGrid.innerHTML = '';
    slideMetadata.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'overview-item';
      card.innerHTML = `
        <div class="overview-item-num">Slide ${item.id} • ${item.category}</div>
        <div class="overview-item-title">${item.title}</div>
      `;
      card.addEventListener('click', () => {
        goToSlide(idx);
        toggleOverviewModal(false);
      });
      overviewGrid.appendChild(card);
    });
  }

  function toggleOverviewModal(show) {
    if (!overviewModal) return;
    const toOpen = typeof show === 'boolean' ? show : !overviewModal.classList.contains('open');
    if (toOpen) {
      buildOverviewGrid();
      overviewModal.classList.add('open');
    } else {
      overviewModal.classList.remove('open');
    }
  }

  if (btnOverviewToggle) btnOverviewToggle.addEventListener('click', () => toggleOverviewModal());
  if (btnCloseOverview) btnCloseOverview.addEventListener('click', () => toggleOverviewModal(false));

  // ==========================================
  // MODE CETAK / EKSPOR PDF
  // ==========================================
  const btnPrintPdf = document.getElementById('btnPrintPdf');
  if (btnPrintPdf) {
    btnPrintPdf.addEventListener('click', () => {
      window.print();
    });
  }

  // ==========================================
  // INTERAKTIF SIMULATOR MIN-MAX (SLIDE 4)
  // ==========================================
  const simActual = document.getElementById('simActual');
  const simMin = document.getElementById('simMin');
  const simMax = document.getElementById('simMax');
  const valActual = document.getElementById('valActual');
  const valMin = document.getElementById('valMin');
  const valMax = document.getElementById('valMax');
  const simBar = document.getElementById('simBar');
  const simStatus = document.getElementById('simStatus');

  function updateSimulator() {
    if (!simActual || !simMin || !simMax || !simBar || !simStatus) return;

    const actual = parseInt(simActual.value, 10);
    const minVal = parseInt(simMin.value, 10);
    const maxVal = parseInt(simMax.value, 10);

    valActual.textContent = actual;
    valMin.textContent = minVal;
    valMax.textContent = maxVal;

    // Hitung lebar bar (max gauge visual 100 kg)
    const maxGauge = 100;
    const pct = Math.min(100, Math.max(8, (actual / maxGauge) * 100));
    simBar.style.width = `${pct}%`;
    simBar.textContent = `${actual} Kg`;

    // Penentuan status Min-Max
    if (actual <= minVal) {
      simBar.style.backgroundColor = 'var(--accent-red)';
      simStatus.style.background = 'rgba(225, 37, 27, 0.2)';
      simStatus.style.color = '#e1251b';
      simStatus.style.borderColor = 'rgba(225, 37, 27, 0.4)';
      simStatus.innerHTML = `
        <span><i class="fa-solid fa-triangle-exclamation"></i> STATUS STOK: KRITIS (RE-ORDER SEGERA)</span>
        <span class="badge badge-danger">Stok ≤ Batas Min (${minVal} Kg)</span>
      `;
    } else if (actual > maxVal) {
      simBar.style.backgroundColor = 'var(--accent-orange)';
      simStatus.style.background = 'rgba(245, 158, 11, 0.2)';
      simStatus.style.color = '#f59e0b';
      simStatus.style.borderColor = 'rgba(245, 158, 11, 0.4)';
      simStatus.innerHTML = `
        <span><i class="fa-solid fa-boxes-stacked"></i> STATUS STOK: OVERSTOCK (BERLEBIH)</span>
        <span class="badge badge-warning">Stok > Batas Max (${maxVal} Kg)</span>
      `;
    } else {
      simBar.style.backgroundColor = 'var(--accent-emerald)';
      simStatus.style.background = 'rgba(16, 185, 129, 0.2)';
      simStatus.style.color = '#10b981';
      simStatus.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      simStatus.innerHTML = `
        <span><i class="fa-solid fa-circle-check"></i> STATUS STOK: AMAN (ZONA OPTIMAL)</span>
        <span class="badge badge-success">Min < Stok ≤ Max</span>
      `;
    }
  }

  if (simActual) simActual.addEventListener('input', updateSimulator);
  if (simMin) simMin.addEventListener('input', updateSimulator);
  if (simMax) simMax.addEventListener('input', updateSimulator);

  // Preset Tombol Skenario Cepat (Slide 4)
  const presetKritis = document.getElementById('presetKritis');
  const presetAman = document.getElementById('presetAman');
  const presetOver = document.getElementById('presetOver');

  if (presetKritis) {
    presetKritis.addEventListener('click', () => {
      simActual.value = 18;
      simMin.value = 30;
      simMax.value = 60;
      updateSimulator();
    });
  }
  if (presetAman) {
    presetAman.addEventListener('click', () => {
      simActual.value = 45;
      simMin.value = 30;
      simMax.value = 60;
      updateSimulator();
    });
  }
  if (presetOver) {
    presetOver.addEventListener('click', () => {
      simActual.value = 75;
      simMin.value = 30;
      simMax.value = 60;
      updateSimulator();
    });
  }

  // Inisialisasi simulator
  updateSimulator();

  // ==========================================
  // TAB MOCKUP APLIKASI (SLIDE 10)
  // ==========================================
  const mockupTabs = document.querySelectorAll('.mockup-tab');
  const mockupScreens = document.querySelectorAll('.mockup-screen');

  mockupTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-mockup');

      mockupTabs.forEach(t => t.classList.remove('active'));
      mockupScreens.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetScreen = document.getElementById(`mockup-${targetId}`);
      if (targetScreen) {
        targetScreen.classList.add('active');
      }
    });
  });

  // ==========================================
  // LIVE DEMO TRANSAKSI BAHAN MASUK & KELUAR (SLIDE 10)
  // ==========================================
  let demoStock = 25;
  const demoStockValue = document.getElementById('demoStockValue');
  const btnDemoIn = document.getElementById('btnDemoIn');
  const btnDemoOut = document.getElementById('btnDemoOut');
  const btnDemoReset = document.getElementById('btnDemoReset');

  function updateDemoStockUI() {
    if (!demoStockValue) return;
    demoStockValue.textContent = `${demoStock} Kg`;
    if (demoStock <= 20) {
      demoStockValue.style.color = 'var(--accent-red)';
    } else if (demoStock > 60) {
      demoStockValue.style.color = 'var(--accent-orange)';
    } else {
      demoStockValue.style.color = 'var(--accent-emerald)';
    }
  }

  if (btnDemoIn) {
    btnDemoIn.addEventListener('click', () => {
      demoStock += 15;
      updateDemoStockUI();
    });
  }

  if (btnDemoOut) {
    btnDemoOut.addEventListener('click', () => {
      if (demoStock >= 10) {
        demoStock -= 10;
        updateDemoStockUI();
      } else {
        alert("Peringatan Sistem: Stok aktual tidak mencukupi untuk pengurangan 10 Kg!");
      }
    });
  }

  if (btnDemoReset) {
    btnDemoReset.addEventListener('click', () => {
      demoStock = 25;
      updateDemoStockUI();
    });
  }

  updateDemoStockUI();

  // ==========================================
  // INTERAKTIF CURSOR SPOTLIGHT & PARALLAX GLOW
  // ==========================================
  const cursorSpotlight = document.getElementById('cursorSpotlight');
  document.addEventListener('mousemove', (e) => {
    if (cursorSpotlight) {
      cursorSpotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      cursorSpotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    }
  });

  // ==========================================
  // INISIALISASI PERTAMA
  // ==========================================
  updateSlideDisplay();
});
