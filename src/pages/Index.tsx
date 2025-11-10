import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Lightbulb, Code, Award, Target, CheckCircle2, Star, HeartPulse } from "lucide-react";
import SemifinalResultPopup from "@/components/SemifinalResultPopup";
import SemifinalResultGalleryPopup from "@/components/SemifinalResultGalleryPopup";
import FinalResultPopup from "@/components/FinalResultPopup";
import FinalLocationPopup from "@/components/FinalLocationPopup";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const Index = () => {
  const handleRegister = () => {
    // Replace with actual Google Form URL
    window.open("https://forms.gle/Pqm72wL7WAyN9aAY9", "_blank");
  };

  const handleViewGuide = () => {
    window.open("https://drive.google.com/open?id=1YL9vzEUvpNclvzAN8i0A7GLiuCxrxFtZ&usp=drive_fs", "_blank");
  };

  const hasilTmUrl = "https://s.id/HasilTMjycc";
  const [semifinalOpen, setSemifinalOpen] = useState(false);
  const [finalOpen, setFinalOpen] = useState(false);
  const [semifinalGalleryOpen, setSemifinalGalleryOpen] = useState(false);
  const [finalLocationOpen, setFinalLocationOpen] = useState(false);
  const [preFinalInfoOpen, setPreFinalInfoOpen] = useState(false);
  const finalAnnouncementDate = new Date(2025, 10, 8, 0, 0, 0); // 8 Nov 2025 local time
  const canShowFinalActions = new Date() >= finalAnnouncementDate;
  const handleOpenFinal = () => {
    const now = new Date();
    if (now < finalAnnouncementDate) {
      setPreFinalInfoOpen(true);
    } else {
      setFinalOpen(true);
    }
  };
  const handleOpenFinalLocation = () => {
    const now = new Date();
    if (now < finalAnnouncementDate) {
      setPreFinalInfoOpen(true);
    } else {
      setFinalLocationOpen(true);
    }
  };
  useEffect(() => {
    // Popup awal: jika rule final terpenuhi, tampilkan hasil final; jika belum, tampilkan hasil semifinal
    const t = setTimeout(() => {
      if (new Date() >= finalAnnouncementDate) {
        setFinalOpen(true);
      } else {
        setSemifinalOpen(true);
      }
    }, 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header Organizer */}
      <div className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 text-foreground">
             <img src="/BALIHO HARJAD JATIM.png" alt="Hari Jadi Jatim 80 Tahun" className="h-10 md:h-12 object-contain" />
              <img src="/logo-kominfo-jatim-Zpmey.png" alt="Dinas Komunikasi dan Informatika Provinsi Jawa Timur" className="h-10 md:h-12 object-contain" />
              <img src="/logo-provinsi-jawa-timur (1).png" alt="Pemerintah Provinsi Jawa Timur" className="h-10 md:h-12 object-contain" />
              <img src="/gerbang-baru.png" alt="Jawa Timur Gerbang Baru Nusantara" className="h-10 md:h-12 object-contain" />
              <img src="/Universitas-surabaya.png" alt="Universitas Surabaya (UBAYA)" className="h-10 md:h-12 object-contain" />
              <img src="/LOGO SI BIRU MEMANJANG.png" alt="Program Studi Sistem Informasi UBAYA" className="h-10 md:h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
              Jatim Youth Codepreneur Challenge
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium animate-fade-in">
              Berkarya dengan Teknologi, Bertumbuh untuk Negeri
            </p>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in">
              Kompetisi Koding untuk siswa SMA/SMK/MA se-Jawa Timur dalam menciptakan solusi bisnis digital berkelanjutan
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in">
              {/* <Button 
                size="lg"
                onClick={handleRegister}
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Daftar Sekarang
              </Button> */}
              <Button 
                size="lg"
                onClick={() => {
                  const timelineSection = document.getElementById("timeline");
                  if (timelineSection) {
                    timelineSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Lihat Timeline
              </Button>
              <Button 
                size="lg"
                onClick={() => {
                  const target = document.getElementById("timeline-pengumuman-final");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "center" });
                  } else {
                    const timelineSection = document.getElementById("timeline");
                    if (timelineSection) timelineSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Lihat Hasil Final
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handleViewGuide}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 backdrop-blur-sm bg-white/10"
              >
                Lihat Panduan
              </Button>
              {canShowFinalActions && (
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleOpenFinalLocation}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 backdrop-blur-sm bg-white/10"
                >
                  Lihat Lokasi Final
                </Button>
              )}
            </div>

            <div className="flex justify-center animate-fade-in">
              <Badge className="mb-2 px-3 py-1 rounded-full bg-destructive/30 text-white border border-destructive/40 ring-1 ring-destructive/50 shadow-sm shadow-destructive/20 animate-pulse">
                PENTING: Hasil dari tahap kompetisi selanjutnya bisa dilihat pada bagian timeline, di bawah
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-7 h-7 mx-auto mb-2 text-accent" />
                  <p className="text-xl font-bold text-white">Total Hadiah Senilai 22 Juta</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Users className="w-7 h-7 mx-auto mb-2 text-accent" />
                  <p className="text-xl font-bold text-white">5</p>
                  <p className="text-xs text-white/80">Anggota Tim</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Award className="w-7 h-7 mx-auto mb-2 text-accent" />
                  <p className="text-xl font-bold text-white">Beasiswa Senilai Ratusan Juta</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Calendar className="w-7 h-7 mx-auto mb-2 text-accent" />
                  <p className="text-base font-bold text-white leading-tight">24 November<br/>2025</p>
                  <p className="text-xs text-white/80 mt-1">Grand Final</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Tentang Kompetisi</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Digital Business Innovation for Sustainable Jatim
              </h2>
              <p className="text-lg text-muted-foreground">
                Inovasi Bisnis Digital untuk Jatim Tangguh dan Terus Bertumbuh
              </p>
            </div>

            <Card className="shadow-[var(--shadow-card)] border-primary/10">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  Kompetisi ini mengajak siswa SMA/SMK/MA se-Jawa Timur untuk berpikir cerdas dan inovatif dalam mengamati potensi yang ada di Provinsi Jawa Timur, menganalisis problem atau peluang yang ada, serta merancang pengembangan solusi berbasis bisnis dan teknologi digital.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Fokus SDGs</h3>
                      <p className="text-muted-foreground">Solusi yang mendukung pencapaian tujuan SDGs untuk peningkatan kualitas hidup</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Code className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Live Coding</h3>
                      <p className="text-muted-foreground">Tantangan coding langsung di babak final dengan narasumber ahli</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Tema yang Diangkat</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Tema Kompetisi</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilihan tema dari solusi yang dapat dikembangkan, meliputi beberapa tema terkait SDG, berikut ini:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Inclusive Digital Economy */}
              <Card className="relative overflow-hidden shadow-[var(--shadow-card)] border-primary/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 space-y-3 relative">
                  <Target className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold text-foreground italic">Inclusive Digital Economy</h3>
                  <p className="text-muted-foreground">Aplikasi untuk pemberdayaan masyarakat inklusif, UMKM, dan disabilitas</p>
                </CardContent>
              </Card>

              {/* HealthTech for Resilience */}
              <Card className="relative overflow-hidden shadow-[var(--shadow-card)] border-secondary/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 space-y-3 relative">
                  <HeartPulse className="w-10 h-10 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground italic">HealthTech for Resilience</h3>
                  <p className="text-muted-foreground">Aplikasi kesehatan untuk masyarakat tangguh</p>
                </CardContent>
              </Card>

              {/* Creative Economy & Smart Tourism */}
              <Card className="relative overflow-hidden shadow-[var(--shadow-card)] border-accent/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 space-y-3 relative">
                  <Lightbulb className="w-10 h-10 text-accent" />
                  <h3 className="text-xl font-bold text-foreground italic">Creative Economy & Smart Tourism</h3>
                  <p className="text-muted-foreground">Aplikasi untuk memperkuat pariwisata cerdas dan ekonomi kreatif Jatim</p>
                </CardContent>
              </Card>

              {/* Smart City & Village Solutions */}
              <Card className="relative overflow-hidden shadow-[var(--shadow-card)] border-muted-foreground/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-muted/20 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 space-y-3 relative">
                  <Code className="w-10 h-10 text-muted-foreground" />
                  <h3 className="text-xl font-bold text-foreground italic">Smart City & Village Solutions</h3>
                  <p className="text-muted-foreground">Aplikasi tata kelola kota dan desa berkelanjutan</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Stages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Tahapan Lomba</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                3 Tahap Menuju Kemenangan
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="relative shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all hover:scale-105 border-primary/10">
                <div className="absolute -top-4 left-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <CardContent className="p-8 pt-12 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Pendaftaran</h3>
                  <p className="text-muted-foreground">
                    Kirimkan data tim anda dan solusi aplikasi berupa proposal yang menjelaskan latar belakang, permasalahan, dan usulan solusi.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>30 Tim Terbaik Lolos</span>
                  </div>
                  <div className="pt-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Deadline: 29 Oktober 2025
                  </div>
                </CardContent>
              </Card>

              <Card className="relative shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all hover:scale-105 border-secondary/10">
                <div className="absolute -top-4 left-6">
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <CardContent className="p-8 pt-12 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Semi Final</h3>
                  <p className="text-muted-foreground">
                    Buat proposal lengkap dengan deskripsi sistem, dan fitur-fitur yang akan dikembangkan dalam bentuk screenshot UI dan penjelasan UX.
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>15 Tim Finalis</span>
                  </div>
                  <div className="pt-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Deadline: 7 November 2025
                  </div>
                </CardContent>
              </Card>

              <Card className="relative shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all hover:scale-105 border-accent/10">
                <div className="absolute -top-4 left-6">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <CardContent className="p-8 pt-12 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Final</h3>
                  <p className="text-muted-foreground">
                    Bangun prototype dari solusi yang usulkan, lalu fitur dari aplikasi akan diubah menjadi coding dan presentasikan hasilnya di hadapan juri di Ubaya.
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <Trophy className="w-5 h-5" />
                    <span>5 Kategori Pemenang</span>
                  </div>
                  <div className="pt-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    24 November 2025 di Ubaya
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Hadiah</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Total Hadiah Senilai 22 Juta + Beasiswa Kuliah
              </h2>
              <p className="text-lg text-muted-foreground">
                Raih kesempatan beasiswa kuliah di Universitas Surabaya (Sistem Informasi) dengan potongan hingga 75%
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="relative overflow-hidden shadow-[var(--shadow-card)] border-2 border-primary">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 space-y-4 relative">
                  <Trophy className="w-12 h-12 text-primary mb-2" />
                  <h3 className="text-2xl font-bold text-foreground">Juara 1</h3>
                  <p className="text-3xl font-bold text-primary">Rp 7.500.000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Trophy
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Sertifikat
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Beasiswa Ubaya - Sistem Informasi (Up to 75%)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden shadow-[var(--shadow-card)] border-2 border-secondary">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 space-y-4 relative">
                  <Trophy className="w-12 h-12 text-secondary mb-2" />
                  <h3 className="text-2xl font-bold text-foreground">Juara 2</h3>
                  <p className="text-3xl font-bold text-secondary">Rp 6.000.000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      Trophy
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      Sertifikat
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      Beasiswa Ubaya - Sistem Informasi (Up to 75%)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden shadow-[var(--shadow-card)] border-2 border-accent">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 space-y-4 relative">
                  <Trophy className="w-12 h-12 text-accent mb-2" />
                  <h3 className="text-2xl font-bold text-foreground">Juara 3</h3>
                  <p className="text-3xl font-bold text-accent">Rp 4.500.000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Trophy
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Sertifikat
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Beasiswa Ubaya - Sistem Informasi (Up to 75%)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-[var(--shadow-card)] border-primary/30">
                <CardContent className="p-6 flex items-center gap-4">
                  <Lightbulb className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Juara Ide Terbaik</h4>
                    <p className="text-2xl font-bold text-primary">Rp 2.000.000</p>
                    <p className="text-sm text-muted-foreground">+ Trophy + Sertifikat + Beasiswa Sistem Informasi (Up to 50%)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-card)] border-secondary/30">
                <CardContent className="p-6 flex items-center gap-4">
                  <Code className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Juara Kemampuan Programming</h4>
                    <p className="text-2xl font-bold text-secondary">Rp 2.000.000</p>
                    <p className="text-sm text-muted-foreground">+ Trophy + Sertifikat + Beasiswa Sistem Informasi (Up to 50%)</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* <Card className="shadow-[var(--shadow-card)] border-accent/30 md:col-span-2">
                <CardContent className="p-6 flex items-center gap-4">
                  <Star className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Juara Favorit</h4>
                    <p className="text-2xl font-bold text-accent">Rp 2.000.000</p>
                    <p className="text-sm text-muted-foreground">+ Trophy + Sertifikat</p>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Timeline</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Jadwal Kompetisi
              </h2>
            </div>

            <div className="space-y-6">
              {/* Technical Meeting */}
              <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border-primary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary mb-1">25 Oktober 2025</p>
                    <p className="text-lg font-semibold text-foreground">Technical Meeting</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => window.open(hasilTmUrl, "_blank")}
                    className="whitespace-nowrap"
                  >
                    Buka Hasil TM
                  </Button>
                </CardContent>
              </Card>

              {/* Batas Pengumpulan Penyisihan */}
              <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border-secondary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-secondary mb-1">29 Oktober 2025</p>
                    <p className="text-lg font-semibold text-foreground">Batas Pengumpulan Karya Babak Penyisihan</p>
                  </div>
                </CardContent>
              </Card>

              {/* Pengumuman Semifinalis */}
              <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border-primary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary mb-1">31 Oktober 2025</p>
                    <p className="text-lg font-semibold text-foreground">Pengumuman Tim yang Masuk Semi Final</p>
                    <p className="text-xs text-muted-foreground mt-1">Pengingat: Unduh Template Semifinal untuk lanjut ke babak berikutnya.</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSemifinalOpen(true)}
                    className="whitespace-nowrap"
                  >
                    Buka Hasil Semifinal
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://docs.google.com/document/d/1lZ3f-DMq2fRhGWUmtZJ-ypF78oFt4oHq?rtpof=true&usp=drive_fs", "_blank")}
                    className="whitespace-nowrap"
                  >
                    Template Semifinal
                  </Button>
                </CardContent>
              </Card>

              {/* Batas Pengumpulan Semifinalis */}
              <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border-secondary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-secondary mb-1">7 November 2025</p>
                    <p className="text-lg font-semibold text-foreground">Batas Pengumpulan Karya Semifinalis</p>
                  </div>
                  <Button
                    id="btn-pengumpulan-semifinal"
                    variant="outline"
                    onClick={() => window.open("https://forms.gle/xt12es8rUoNxs6xUA", "_blank")}
                    className="whitespace-nowrap"
                  >
                    Pengumpulan Semifinal
                  </Button>
                </CardContent>
              </Card>

              {/* Pengumuman Finalis */}
              <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border-primary/20">
                <CardContent id="timeline-pengumuman-final" className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary mb-1">8 November 2025</p>
                    <p className="text-lg font-semibold text-foreground">Pengumuman Tim yang Masuk Final</p>
                  </div>
                  {canShowFinalActions && (
                    <Button
                      variant="outline"
                      onClick={handleOpenFinal}
                      className="whitespace-nowrap"
                    >
                      Buka Hasil Final
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Batas Pengumpulan Karya Finalis */}
              <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border-secondary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-secondary mb-1">21 November 2025</p>
                    <p className="text-lg font-semibold text-foreground">Batas Pengumpulan Karya Finalis</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all border-accent/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-accent mb-1">24 November 2025</p>
                    <p className="text-lg font-semibold text-foreground">Final dan Penyerahan Hadiah</p>
                  </div>
                  {canShowFinalActions && (
                    <Button
                      variant="outline"
                      onClick={handleOpenFinalLocation}
                      className="whitespace-nowrap"
                    >
                      Lihat Lokasi Final
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Siap Menjadi Codepreneur Muda Jatim?
            </h2>
            <p className="text-xl text-white/90">
              Daftarkan timmu sekarang dan wujudkan inovasi digitalmu untuk Jawa Timur yang berkelanjutan!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg"
                onClick={handleRegister}
                className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-12 py-7 shadow-2xl hover:shadow-xl transition-all hover:scale-105"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Partners & Sponsors Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Didukung Oleh
              </h2>
            </div>
            
            <div className="space-y-12">
              {/* Government Institutions */}
              <div>
                <h3 className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                  Instansi Pemerintah
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl flex items-center justify-center p-4">
                    <img src="/logo-provinsi-jawa-timur (1).png" alt="Pemerintah Provinsi Jawa Timur" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl flex items-center justify-center p-4">
                    <img src="/logo-kominfo-jatim-Zpmey.png" alt="Diskominfo Jatim" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Universities */}
              <div>
                <h3 className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                  Perguruan Tinggi
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl flex items-center justify-center p-4">
                    <img src="/Universitas-surabaya.png" alt="Universitas Surabaya" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Jatim Youth Codepreneur Challenge</h3>
            <p className="text-white/70">
              Kolaborasi Dinas Komunikasi dan Informatika Provinsi Jawa Timur<br />
              dengan Universitas Surabaya
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm">
                © 2025 Dinas Kominfo Jawa Timur. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Semifinal Reminder Popup */}
      <SemifinalResultPopup 
        open={semifinalOpen} 
        onOpenChange={setSemifinalOpen} 
        onOpenGallery={() => setSemifinalGalleryOpen(true)}
      />
      {/* Semifinal Gallery Popup */}
      <SemifinalResultGalleryPopup open={semifinalGalleryOpen} onOpenChange={setSemifinalGalleryOpen} />
      {/* Final Result Popup */}
      <FinalResultPopup open={finalOpen} onOpenChange={setFinalOpen} />
      {/* Final Location Popup */}
      <FinalLocationPopup open={finalLocationOpen} onOpenChange={setFinalLocationOpen} />
      {/* Pre-Final Info Popup */}
      <Dialog open={preFinalInfoOpen} onOpenChange={setPreFinalInfoOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Tahap semi final belum selesai</DialogTitle>
          </DialogHeader>
          <p className="text-center text-muted-foreground">
            Hasil final akan ditampilkan setelah tahap semifinal selesai dan pengumuman final.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;