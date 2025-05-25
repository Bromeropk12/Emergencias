"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Phone,
  Heart,
  Brain,
  Shield,
  ArrowDown,
  Stethoscope,
  Activity,
  Star,
  Target,
  Building2,
  Plus,
  Eye,
  Clipboard,
  UserPlus,
  Truck,
  Clock,
  CheckCircle2,
} from "lucide-react"

// Medical cross animated icon
const MedicalCross = ({ className = "w-8 h-8", isActive = false }) => (
  <div className={`relative ${className}`}>
    <motion.div
      animate={isActive ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] } : {}}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      className="w-full h-full"
    >
      <Plus className="w-full h-full text-white" strokeWidth={3} />
    </motion.div>
    {isActive && (
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0 bg-red-400 rounded-full blur-sm"
      />
    )}
  </div>
)

// Heartbeat line animation
const HeartbeatLine = ({ isActive = false }) => (
  <div className="w-full h-8 flex items-center justify-center">
    <svg width="100" height="30" viewBox="0 0 100 30" className="text-white">
      <motion.path
        d="M0,15 L20,15 L25,5 L30,25 L35,10 L40,20 L45,15 L100,15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={isActive ? { pathLength: [0, 1, 0] } : { pathLength: 0 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
    </svg>
  </div>
)

// Animated stethoscope
const AnimatedStethoscope = ({ isActive = false }) => (
  <motion.div
    animate={isActive ? { rotate: [0, 10, -10, 0] } : {}}
    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
  >
    <Stethoscope className="w-8 h-8 text-white" />
  </motion.div>
)

// Pulsing brain
const PulsingBrain = ({ isActive = false }) => (
  <motion.div
    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
  >
    <Brain className="w-8 h-8 text-white" />
    {isActive && (
      <motion.div
        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0 bg-purple-400 rounded-full blur-md"
      />
    )}
  </motion.div>
)

// Floating particles for medical theme
interface Particle {
  id: number
  initialX: number
  initialY: number
  animateX: number
  animateY: number
  duration: number
}

const MedicalParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generar las partículas solo en el cliente
    const particlesData = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 1200,
      initialY: Math.random() * 800,
      animateX: Math.random() * 1200,
      animateY: Math.random() * 800,
      duration: Math.random() * 10 + 5,
    }))
    setParticles(particlesData)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-30" />
        </motion.div>
      ))}
    </div>
  )
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const InfographicCard = ({
  icon: IconComponent,
  title,
  description,
  color = "blue",
  delay = 0,
  isActive = false,
  onClick,
  stepNumber,
}: {
  icon: any
  title: string
  description: string
  color?: string
  delay?: number
  isActive?: boolean
  onClick?: () => void
  stepNumber: number
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [sparklePositions, setSparklePositions] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    if (isActive) {
      // Generar posiciones solo cuando la tarjeta se activa
      const positions = Array.from({ length: 5 }, () => ({
        x: Math.random() * 250,
        y: Math.random() * 150,
      }))
      setSparklePositions(positions)
    }
  }, [isActive])

  const colorClasses = {
    emergency: "from-red-500 via-red-600 to-red-700 shadow-red-500/30",
    medical: "from-blue-500 via-blue-600 to-blue-700 shadow-blue-500/30",
    support: "from-green-500 via-green-600 to-green-700 shadow-green-500/30",
    care: "from-purple-500 via-purple-600 to-purple-700 shadow-purple-500/30",
    coordination: "from-teal-500 via-teal-600 to-teal-700 shadow-teal-500/30",
    psychology: "from-pink-500 via-pink-600 to-pink-700 shadow-pink-500/30",
    therapy: "from-orange-500 via-orange-600 to-orange-700 shadow-orange-500/30",
    documentation: "from-indigo-500 via-indigo-600 to-indigo-700 shadow-indigo-500/30",
    family: "from-cyan-500 via-cyan-600 to-cyan-700 shadow-cyan-500/30",
    external: "from-emerald-500 via-emerald-600 to-emerald-700 shadow-emerald-500/30",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: -50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.97 }}
      className={`
        relative p-6 rounded-3xl cursor-pointer overflow-hidden
        bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]}
        text-white shadow-xl hover:shadow-2xl transition-all duration-300
        border-2 border-white/20
        ${isActive ? "ring-4 ring-yellow-400 ring-opacity-80 shadow-yellow-400/50" : ""}
      `}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Step number badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.2 }}
        className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
      >
        {stepNumber}
      </motion.div>

      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6 }}
      />

      {/* Floating sparkles */}
      <AnimatePresence>
        {isActive && (
          <>
            {sparklePositions.map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: position.x,
                  y: position.y,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: 360,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <div className="flex items-start space-x-4">
          {/* Animated icon container */}
          <motion.div
            className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm relative"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <IconComponent isActive={isActive} />
            {isActive && (
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-white rounded-2xl blur-md"
              />
            )}
          </motion.div>

          <div className="flex-1">
            <motion.h3
              className="text-xl font-bold mb-3 leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.1 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-sm opacity-90 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Star className="w-4 h-4 text-yellow-800" />
          </motion.div>
        </motion.div>
      )}

      {/* Pulse border for active cards */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-yellow-400"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  )
}

const InfographicArrow = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    className="flex justify-center my-6"
  >
    <motion.div
      animate={{
        y: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <div className="p-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full shadow-lg">
        <ArrowDown className="w-6 h-6 text-white" strokeWidth={3} />
      </div>
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full blur-lg opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  </motion.div>
)

export default function EmergencyLineActivation() {
  const [activeStep, setActiveStep] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 10)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: ({ isActive }: { isActive: boolean }) => <MedicalCross isActive={isActive} />,
      title: "Evento en Salud",
      description: "Notificación inmediatamente a profesional de enfermería",
      color: "emergency",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => (
        <motion.div
          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Eye className="w-8 h-8 text-white" />
        </motion.div>
      ),
      title: "Valoración de la PCD",
      description: "Valoración de la PCD a cargo de profesional de enfermería",
      color: "medical",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => (
        <motion.div
          animate={isActive ? { rotate: [0, 15, -15, 0] } : {}}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <Phone className="w-8 h-8 text-white" />
        </motion.div>
      ),
      title: "Solicitud de Apoyo",
      description: "Solicitud de apoyo al equipo profesional de emergencias",
      color: "support",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => <AnimatedStethoscope isActive={isActive} />,
      title: "Atención Inicial",
      description: "Atención inicial a cargo de profesional de enfermería y programas de atención",
      color: "care",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => (
        <motion.div
          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          <Building2 className="w-8 h-8 text-white" />
          {isActive && <HeartbeatLine isActive={isActive} />}
        </motion.div>
      ),
      title: "Activación Línea 123",
      description: "Activación de la línea de emergencias de la Secretaría Distrital de Salud 123",
      color: "coordination",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => <PulsingBrain isActive={isActive} />,
      title: "Alteración de la Conducta",
      description: "Profesional de Psicología",
      color: "psychology",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => (
        <motion.div
          animate={isActive ? { rotate: [0, 360] } : {}}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Activity className="w-8 h-8 text-white" />
        </motion.div>
      ),
      title: "Lesiones Corporales",
      description: "Profesional de Fisioterapia",
      color: "therapy",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => (
        <motion.div
          animate={isActive ? { y: [0, -5, 0] } : {}}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Clipboard className="w-8 h-8 text-white" />
        </motion.div>
      ),
      title: "Datos de Identificación",
      description: "Diagnóstico - Profesional competente en salud",
      color: "documentation",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => (
        <motion.div
          animate={isActive ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <UserPlus className="w-8 h-8 text-white" />
        </motion.div>
      ),
      title: "Referente Familiar",
      description:
        "Solicitar referente familiar - informar sobre el evento. Traslado de la PCD al servicio de urgencias y direccionamiento del médico registrador de urgencias",
      color: "family",
    },
    {
      icon: ({ isActive }: { isActive: boolean }) => (
        <motion.div
          animate={isActive ? { x: [0, 10, 0] } : {}}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <Truck className="w-8 h-8 text-white" />
        </motion.div>
      ),
      title: "Atención Externa Grupo 6",
      description: "Notificación de Evento en salud - Referente técnico en urgencias para Atención Externa Integrada",
      color: "external",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-x-hidden">
      {/* Infographic Header */}
      <motion.section className="relative overflow-hidden py-16 px-4 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600">
        <MedicalParticles />

        <div className="relative max-w-6xl mx-auto text-center text-white z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Plus className="w-10 h-10 text-white" strokeWidth={3} />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-lg"
          >
            ACTIVACIÓN LÍNEA DE EMERGENCIA
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-white/90 font-semibold"
          >
            PROTOCOLO INTEGRAL DE ATENCIÓN EN EVENTOS DE SALUD
          </motion.div>

          {/* Infographic stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Clock, label: "RESPUESTA", value: "INMEDIATA" },
              { icon: Shield, label: "ATENCIÓN", value: "24/7" },
              { icon: Heart, label: "CUIDADO", value: "INTEGRAL" },
              { icon: CheckCircle2, label: "LÍNEA", value: "123" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                <div className="text-xs font-bold text-yellow-300">{stat.label}</div>
                <div className="text-sm font-black text-white">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Infographic Flow */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/50 to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
            >
              <Target className="w-5 h-5" />
              <span className="font-bold text-sm">FLUJO DE EMERGENCIA</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4">PROCESO DE ACTIVACIÓN</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Protocolo paso a paso desde la detección hasta la resolución integral
            </p>
          </AnimatedSection>

          {/* Infographic steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <AnimatedSection delay={index * 0.1}>
                  <InfographicCard
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    color={step.color}
                    delay={index * 0.1}
                    isActive={activeStep === index}
                    onClick={() => setActiveStep(index)}
                    stepNumber={index + 1}
                  />
                </AnimatedSection>

                {index < steps.length - 1 && <InfographicArrow delay={index * 0.1 + 0.2} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographic Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-10 right-10 w-16 h-16"
          >
            <Plus className="w-full h-full text-white" />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4"
            >
              <Shield className="w-8 h-8" />
            </motion.div>

            <h3 className="text-2xl font-black mb-4 text-white">SISTEMA DE EMERGENCIAS INTEGRADO</h3>
            <p className="text-base text-gray-300 max-w-2xl mx-auto font-medium">
              Protocolo diseñado para garantizar atención oportuna y especializada en eventos de salud
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-t border-gray-700 pt-6"
          >
            <p className="text-gray-400 font-medium">© 2024 Sistema de Activación de Línea de Emergencia</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
